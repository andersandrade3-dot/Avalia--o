/**
 * Gerenciador de Armazenamento Local, Sessão do Aluno e Backup
 * Permite persistência contínua e migração entre dispositivos (computador/celular).
 */

const STORAGE_KEYS = {
  STUDENT: "iaef_aluno_ativo",
  RESPONSES: "iaef_respostas_avaliacao",
  SETTINGS: "iaef_configuracoes_usuario",
  META: "iaef_meta_sessao"
};

export class StorageManager {
  constructor() {
    this.saveTimeout = null;
    this.listeners = new Set();
  }

  // Registra callbacks para quando houver salvamento
  onSave(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify(event, data) {
    this.listeners.forEach(cb => {
      try {
        cb(event, data);
      } catch (err) {
        console.error("Erro no listener de storage:", err);
      }
    });
  }

  // --- GESTÃO DO ALUNO / SESSÃO ---
  getStudent() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDENT);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Falha ao recuperar aluno do localStorage:", e);
      return null;
    }
  }

  saveStudent(studentData) {
    const student = {
      nome: (studentData.nome || "").trim(),
      email: (studentData.email || "").trim().toLowerCase(),
      senha: (studentData.senha || "").trim(),
      curso: (studentData.curso || "Licenciatura em Física").trim(),
      instituicao: (studentData.instituicao || "IFCE").trim(),
      matricula: (studentData.matricula || "").trim(),
      dataInicio: studentData.dataInicio || new Date().toISOString(),
      ultimaAtividade: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.STUDENT, JSON.stringify(student));
    this.notify("student_updated", student);
    return student;
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.STUDENT);
    this.notify("logout", null);
  }

  // --- GESTÃO DAS RESPOSTAS ---
  getAllResponses() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RESPONSES);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error("Falha ao recuperar respostas:", e);
      return {};
    }
  }

  getResponse(questionId) {
    const responses = this.getAllResponses();
    return responses[questionId] || "";
  }

  // Salvamento individual ou em lote
  saveResponse(questionId, text, immediate = false) {
    const doSave = () => {
      const responses = this.getAllResponses();
      responses[questionId] = text;
      
      const meta = {
        lastSaved: new Date().toISOString(),
        timestamp: Date.now()
      };
      
      localStorage.setItem(STORAGE_KEYS.RESPONSES, JSON.stringify(responses));
      localStorage.setItem(STORAGE_KEYS.META, JSON.stringify(meta));
      
      this.notify("saved", { questionId, text, meta });
    };

    if (immediate) {
      if (this.saveTimeout) clearTimeout(this.saveTimeout);
      doSave();
    } else {
      if (this.saveTimeout) clearTimeout(this.saveTimeout);
      this.saveTimeout = setTimeout(doSave, 350); // debounce de 350ms para fluidez
    }
  }

  getLastSavedInfo() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.META);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  // --- CÁLCULO DE PROGRESSO ---
  calculateProgress(atividades) {
    const responses = this.getAllResponses();
    let totalQuestions = 0;
    let answeredQuestions = 0;
    const activityStatus = {};

    atividades.forEach(ativ => {
      let ativTotal = ativ.questoes.length;
      let ativAnswered = 0;

      ativ.questoes.forEach(q => {
        totalQuestions++;
        const answer = (responses[q.id] || "").trim();
        // Critério: pelo menos 15 caracteres para considerar em andamento/respondida
        if (answer.length >= 15) {
          answeredQuestions++;
          ativAnswered++;
        }
      });

      activityStatus[ativ.id] = {
        total: ativTotal,
        answered: ativAnswered,
        isComplete: ativAnswered === ativTotal,
        isStarted: ativAnswered > 0,
        percent: Math.round((ativAnswered / ativTotal) * 100)
      };
    });

    const overallPercent = totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;

    return {
      totalQuestions,
      answeredQuestions,
      overallPercent,
      activityStatus
    };
  }

  // --- EXPORTAÇÃO E IMPORTAÇÃO (SINCRONIZAÇÃO ENTRE DISPOSITIVOS) ---
  exportBackupData() {
    const student = this.getStudent();
    const responses = this.getAllResponses();
    const meta = this.getLastSavedInfo() || { lastSaved: new Date().toISOString() };

    return {
      version: "1.0",
      app: "Avaliacao-Informatica-Fisica-IFCE",
      exportedAt: new Date().toISOString(),
      student,
      responses,
      meta
    };
  }

  exportBackupCode() {
    const data = this.exportBackupData();
    // Codifica para string legível de backup
    try {
      const jsonStr = JSON.stringify(data);
      return btoa(unescape(encodeURIComponent(jsonStr)));
    } catch (e) {
      return JSON.stringify(data);
    }
  }

  importBackupData(parsedData) {
    if (!parsedData || typeof parsedData !== "object") {
      throw new Error("Formato de arquivo inválido.");
    }

    if (parsedData.student) {
      localStorage.setItem(STORAGE_KEYS.STUDENT, JSON.stringify(parsedData.student));
    }
    if (parsedData.responses) {
      localStorage.setItem(STORAGE_KEYS.RESPONSES, JSON.stringify(parsedData.responses));
    }

    const meta = {
      lastSaved: new Date().toISOString(),
      importedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.META, JSON.stringify(meta));

    this.notify("imported", parsedData);
    return true;
  }

  importBackupCode(codeString) {
    let jsonStr = "";
    try {
      jsonStr = decodeURIComponent(escape(atob(codeString.trim())));
    } catch (e) {
      // Tenta parsing JSON direto caso seja JSON puro
      jsonStr = codeString.trim();
    }

    const parsed = JSON.parse(jsonStr);
    return this.importBackupData(parsed);
  }

  clearAllData() {
    localStorage.removeItem(STORAGE_KEYS.STUDENT);
    localStorage.removeItem(STORAGE_KEYS.RESPONSES);
    localStorage.removeItem(STORAGE_KEYS.META);
    this.notify("cleared", null);
  }
}

export const storage = new StorageManager();
