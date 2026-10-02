/**
 * Controlador Principal da Aplicação
 * Avaliação da Disciplina: Informática Aplicada ao Ensino da Física
 */

import { AVALIACAO_METADATA, ATIVIDADES } from './data.js';
import { storage } from './storage.js';

class AppController {
  constructor() {
    this.currentActivityIndex = 0; // 0 a 4
    this.student = null;
    this.initElements();
    this.bindEvents();
    this.checkInitialState();
  }

  // Mapeamento dos elementos do DOM
  initElements() {
    // Views
    this.authView = document.getElementById('auth-view');
    this.assessmentView = document.getElementById('assessment-view');
    this.relatorioView = document.getElementById('relatorio-view');

    // Header & Aluno
    this.headerStudentChip = document.getElementById('header-student-chip');
    this.studentAvatar = document.getElementById('student-avatar');
    this.studentNameHeader = document.getElementById('student-name-header');
    this.studentCourseHeader = document.getElementById('student-course-header');
    this.btnLogout = document.getElementById('btn-logout');
    this.btnOpenBackup = document.getElementById('btn-open-backup');

    // Autosave
    this.autosaveBadge = document.getElementById('autosave-badge');
    this.autosaveText = document.getElementById('autosave-text');

    // Auth Form
    this.authForm = document.getElementById('auth-form');
    this.inputNome = document.getElementById('auth-nome');
    this.inputEmail = document.getElementById('auth-email');
    this.inputSenha = document.getElementById('auth-senha');
    this.inputCurso = document.getElementById('auth-curso');
    this.inputMatricula = document.getElementById('auth-matricula');

    // Tracker & Stepper
    this.progressBarFill = document.getElementById('progress-bar-fill');
    this.trackerStatsText = document.getElementById('tracker-stats-text');
    this.stepButtons = document.querySelectorAll('.step-btn');

    // Atividade Ativa
    this.activityDomainTag = document.getElementById('activity-domain-tag');
    this.activityTimeTag = document.getElementById('activity-time-tag');
    this.activityTitleText = document.getElementById('activity-title-text');
    this.activityContextText = document.getElementById('activity-context-text');
    this.questionsContainer = document.getElementById('questions-container');

    // Navegação entre Atividades
    this.btnPrevActivity = document.getElementById('btn-prev-activity');
    this.btnNextActivity = document.getElementById('btn-next-activity');
    this.btnQuickPrev = document.getElementById('btn-quick-prev');
    this.btnQuickNext = document.getElementById('btn-quick-next');
    this.btnForceSave = document.getElementById('btn-force-save');
    this.btnPreviewReport = document.getElementById('btn-preview-report-btn');

    // Relatório Final
    this.btnVoltarQuestoes = document.getElementById('btn-voltar-questoes');
    this.btnBaixarPdf = document.getElementById('btn-baixar-pdf');
    this.btnEnviarEmail = document.getElementById('btn-enviar-email');
    this.btnCopiarResumo = document.getElementById('btn-copiar-resumo');
    this.relatorioCorpo = document.getElementById('relatorio-atividades-corpo');

    // Modais
    this.backupModal = document.getElementById('backup-modal');
    this.btnCloseBackupModal = document.getElementById('btn-close-backup-modal');
    this.btnDownloadJson = document.getElementById('btn-download-json');
    this.exportCodeBox = document.getElementById('export-code-box');
    this.btnCopyCode = document.getElementById('btn-copy-code');
    this.importFileInput = document.getElementById('import-file-input');
    this.importCodeBox = document.getElementById('import-code-box');
    this.btnApplyImport = document.getElementById('btn-apply-import');
    this.modalTabButtons = document.querySelectorAll('.modal-tab-btn');
    this.modalTabPanels = document.querySelectorAll('.modal-tab-panel');

    // Modal de E-mail
    this.emailModal = document.getElementById('email-modal');
    this.btnCloseEmailModal = document.getElementById('btn-close-email-modal');
    this.inputEmailDestinatario = document.getElementById('input-email-destinatario');
    this.btnTriggerMailto = document.getElementById('btn-trigger-mailto');

    // Toasts
    this.toastContainer = document.getElementById('toast-container');
  }

  // Event Listeners
  bindEvents() {
    // Auth Form
    this.authForm.addEventListener('submit', (e) => this.handleAuthSubmit(e));
    this.btnLogout.addEventListener('click', () => this.handleLogout());

    // Stepper click
    this.stepButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const stepNum = parseInt(btn.dataset.step, 10);
        this.goToActivity(stepNum - 1);
      });
    });

    // Navegação Inferior
    this.btnPrevActivity.addEventListener('click', () => this.goToPrevActivity());
    this.btnNextActivity.addEventListener('click', () => this.handleNextOrFinish());
    this.btnQuickPrev.addEventListener('click', () => this.goToPrevActivity());
    this.btnQuickNext.addEventListener('click', () => this.handleNextOrFinish());
    this.btnForceSave.addEventListener('click', () => this.handleForceSave());
    this.btnPreviewReport.addEventListener('click', () => this.showReportView());

    // Relatório
    this.btnVoltarQuestoes.addEventListener('click', () => this.showAssessmentView());
    this.btnBaixarPdf.addEventListener('click', () => this.triggerPrintPdf());
    this.btnEnviarEmail.addEventListener('click', () => this.openEmailModal());
    this.btnCopiarResumo.addEventListener('click', () => this.copyReportSummary());

    // Backup & Sincronização
    this.btnOpenBackup.addEventListener('click', () => this.openBackupModal());
    this.btnCloseBackupModal.addEventListener('click', () => this.closeBackupModal());
    this.backupModal.addEventListener('click', (e) => {
      if (e.target === this.backupModal) this.closeBackupModal();
    });

    this.btnDownloadJson.addEventListener('click', () => this.downloadBackupJson());
    this.btnCopyCode.addEventListener('click', () => this.copyBackupCode());
    this.importFileInput.addEventListener('change', (e) => this.handleFileImport(e));
    this.btnApplyImport.addEventListener('click', () => this.applyCodeImport());

    // Abas do Modal
    this.modalTabButtons.forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        this.modalTabButtons.forEach(b => b.classList.remove('active'));
        this.modalTabPanels.forEach(p => p.classList.remove('active'));
        tabBtn.classList.add('active');
        const target = document.getElementById(tabBtn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });

    // Modal de E-mail
    this.btnCloseEmailModal.addEventListener('click', () => this.closeEmailModal());
    this.emailModal.addEventListener('click', (e) => {
      if (e.target === this.emailModal) this.closeEmailModal();
    });
    this.btnTriggerMailto.addEventListener('click', () => this.executeMailto());

    // Storage Listener
    storage.onSave((event, data) => {
      if (event === 'saved') {
        this.showSavedIndicator(data.meta.lastSaved);
        this.updateProgressAndStepper();
      }
    });
  }

  // Verifica estado inicial
  checkInitialState() {
    this.student = storage.getStudent();
    if (this.student && this.student.nome) {
      this.setupLoggedInHeader(this.student);
      this.showAssessmentView();
      this.renderCurrentActivity();
      this.updateProgressAndStepper();
    } else {
      this.showAuthView();
    }
  }

  // ==================== CONTROLE DE TELAS ====================
  showAuthView() {
    this.authView.style.display = 'block';
    this.assessmentView.style.display = 'none';
    this.relatorioView.style.display = 'none';
    this.headerStudentChip.style.display = 'none';
  }

  showAssessmentView() {
    this.authView.style.display = 'none';
    this.assessmentView.style.display = 'block';
    this.relatorioView.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showReportView() {
    this.authView.style.display = 'none';
    this.assessmentView.style.display = 'none';
    this.relatorioView.style.display = 'block';
    this.renderReportContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==================== AUTENTICAÇÃO ====================
  handleAuthSubmit(e) {
    e.preventDefault();
    const nome = this.inputNome.value.trim();
    const email = this.inputEmail.value.trim();
    const senha = this.inputSenha.value.trim();
    const curso = this.inputCurso.value.trim();
    const matricula = this.inputMatricula.value.trim();

    if (!nome || !email || !senha || !curso) {
      this.showToast('Por favor, preencha todos os campos obrigatórios.', 'warning');
      return;
    }

    const studentData = {
      nome,
      email,
      senha,
      curso,
      matricula
    };

    this.student = storage.saveStudent(studentData);
    this.setupLoggedInHeader(this.student);
    this.showToast(`Bem-vindo(a), ${nome}! Sessão salva no navegador.`, 'success');
    this.showAssessmentView();
    this.renderCurrentActivity();
    this.updateProgressAndStepper();
  }

  setupLoggedInHeader(student) {
    this.headerStudentChip.style.display = 'flex';
    this.studentNameHeader.textContent = student.nome;
    this.studentCourseHeader.textContent = student.curso || 'Licenciatura em Física';

    // Iniciais do Avatar
    const names = student.nome.split(' ').filter(Boolean);
    const initials = names.length > 1 
      ? (names[0][0] + names[names.length - 1][0]).toUpperCase()
      : (names[0] ? names[0].substring(0, 2).toUpperCase() : 'AL');
    this.studentAvatar.textContent = initials;
  }

  handleLogout() {
    const confirmLogout = window.confirm(
      "Deseja sair da sessão atual? Suas respostas permanecerão salvas neste navegador, e você poderá entrar novamente a qualquer momento."
    );
    if (confirmLogout) {
      storage.logout();
      this.student = null;
      this.showAuthView();
      this.showToast("Sessão encerrada com sucesso.", "info");
    }
  }

  // ==================== RENDERIZAÇÃO DA ATIVIDADE ====================
  renderCurrentActivity() {
    const ativ = ATIVIDADES[this.currentActivityIndex];
    if (!ativ) return;

    this.activityDomainTag.textContent = ativ.categoria;
    this.activityTimeTag.innerHTML = `<i class="bi bi-clock"></i> ${ativ.tempoEstimado}`;
    this.activityTitleText.textContent = `Atividade ${ativ.numero}: ${ativ.titulo}`;
    this.activityContextText.innerHTML = ativ.contexto;

    // Renderiza Questões
    this.questionsContainer.innerHTML = '';
    const responses = storage.getAllResponses();

    const createQuestionBlock = (q) => {
      const currentAnswer = responses[q.id] || '';
      const isFilled = currentAnswer.trim().length >= 15;
      const charCount = currentAnswer.length;
      const wordCount = currentAnswer.trim() ? currentAnswer.trim().split(/\s+/).length : 0;

      const block = document.createElement('div');
      block.className = 'question-block';
      block.id = `block-${q.id}`;

      block.innerHTML = `
        <div class="question-header">
          <div class="question-title-wrap">
            <span class="question-num-tag">${q.numero}</span>
            <div class="question-text">${q.enunciado}</div>
          </div>
          <span class="question-status-pill ${isFilled ? 'status-filled' : 'status-empty'}" id="status-pill-${q.id}">
            <i class="bi ${isFilled ? 'bi-check-circle-fill' : 'bi-dash-circle'}"></i>
            <span>${isFilled ? 'Respondida' : 'Pendente'}</span>
          </span>
        </div>

        ${q.orientacao ? `
        <div class="hint-toggle-wrap">
          <div class="hint-box">
            <i class="bi bi-lightbulb"></i>
            <div><strong>Diretriz de reflexão:</strong> ${q.orientacao}</div>
          </div>
        </div>` : ''}

        <div class="answer-textarea-wrap">
          <textarea
            class="answer-textarea"
            id="input-${q.id}"
            data-qid="${q.id}"
            placeholder="${q.placeholder || 'Digite sua resposta detalhada aqui...'}"
          >${currentAnswer}</textarea>
          
          <div class="answer-footer">
            <span class="char-counter" id="counter-${q.id}">${wordCount} palavras • ${charCount} caracteres</span>
            <span class="autosave-inline-hint"><i class="bi bi-cloud-check"></i> Salvamento contínuo</span>
          </div>
        </div>
      `;

      // Listener de Digitação com Auto-Save
      const textarea = block.querySelector(`#input-${q.id}`);
      textarea.addEventListener('input', (e) => {
        const text = e.target.value;
        this.handleAnswerInput(q.id, text);
      });

      return block;
    };

    if (ativ.eixos && ativ.eixos.length > 0) {
      ativ.eixos.forEach(eixo => {
        const eixoDiv = document.createElement('div');
        eixoDiv.className = 'eixo-card-wrapper';
        eixoDiv.innerHTML = `
          <div class="eixo-badge-header">
            <span class="eixo-tag">${eixo.subtitulo || 'Eixo Temático'}</span>
            <h4 class="eixo-title">${eixo.titulo}</h4>
          </div>
          <p class="eixo-desc">${eixo.descricao}</p>
        `;
        eixo.questoes.forEach(q => {
          eixoDiv.appendChild(createQuestionBlock(q));
        });
        this.questionsContainer.appendChild(eixoDiv);
      });
    } else {
      ativ.questoes.forEach(q => {
        this.questionsContainer.appendChild(createQuestionBlock(q));
      });
    }

    // Atualiza botões de navegação
    this.updateNavigationButtons();
    this.updateStepperActiveState();
  }

  handleAnswerInput(qid, text) {
    // Feedback visual imediato de "Salvando..."
    this.autosaveBadge.className = 'autosave-badge saving';
    this.autosaveText.textContent = 'Gravando...';

    // Grava no storage com debounce
    storage.saveResponse(qid, text, false);

    // Atualiza contador de palavras/caracteres do item
    const counterEl = document.getElementById(`counter-${qid}`);
    const statusPill = document.getElementById(`status-pill-${qid}`);
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    if (counterEl) {
      counterEl.textContent = `${wordCount} palavras • ${charCount} caracteres`;
    }

    const isFilled = text.trim().length >= 15;
    if (statusPill) {
      statusPill.className = `question-status-pill ${isFilled ? 'status-filled' : 'status-empty'}`;
      statusPill.innerHTML = `
        <i class="bi ${isFilled ? 'bi-check-circle-fill' : 'bi-dash-circle'}"></i>
        <span>${isFilled ? 'Respondida' : 'Pendente'}</span>
      `;
    }
  }

  showSavedIndicator(timestampStr) {
    this.autosaveBadge.className = 'autosave-badge saved';
    const date = timestampStr ? new Date(timestampStr) : new Date();
    const timeStr = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.autosaveText.textContent = `Salvo às ${timeStr}`;
  }

  handleForceSave() {
    const textareas = this.questionsContainer.querySelectorAll('.answer-textarea');
    textareas.forEach(t => {
      const qid = t.dataset.qid;
      storage.saveResponse(qid, t.value, true);
    });
    this.showToast('Progresso salvo imediatamente no navegador!', 'success');
  }

  // ==================== NAVEGAÇÃO ENTRE ATIVIDADES ====================
  goToActivity(index) {
    if (index >= 0 && index < ATIVIDADES.length) {
      this.currentActivityIndex = index;
      this.renderCurrentActivity();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPrevActivity() {
    if (this.currentActivityIndex > 0) {
      this.goToActivity(this.currentActivityIndex - 1);
    }
  }

  handleNextOrFinish() {
    if (this.currentActivityIndex < ATIVIDADES.length - 1) {
      this.goToActivity(this.currentActivityIndex + 1);
    } else {
      // Última atividade: direciona para o relatório
      this.showReportView();
    }
  }

  updateNavigationButtons() {
    // Botão Anterior
    if (this.currentActivityIndex === 0) {
      this.btnPrevActivity.disabled = true;
      this.btnPrevActivity.style.opacity = '0.5';
      this.btnQuickPrev.disabled = true;
    } else {
      this.btnPrevActivity.disabled = false;
      this.btnPrevActivity.style.opacity = '1';
      this.btnQuickPrev.disabled = false;
    }

    // Botão Próximo / Finalizar
    if (this.currentActivityIndex === ATIVIDADES.length - 1) {
      this.btnNextActivity.innerHTML = `<span>Visualizar Relatório Final</span> <i class="bi bi-file-earmark-check-fill"></i>`;
      this.btnNextActivity.className = 'btn btn-success btn-lg';
      this.btnQuickNext.title = 'Ir para o Relatório Final';
    } else {
      this.btnNextActivity.innerHTML = `<span>Próxima Atividade</span> <i class="bi bi-arrow-right"></i>`;
      this.btnNextActivity.className = 'btn btn-primary btn-lg';
      this.btnQuickNext.title = 'Próxima Atividade';
    }
  }

  updateStepperActiveState() {
    this.stepButtons.forEach((btn, idx) => {
      if (idx === this.currentActivityIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  updateProgressAndStepper() {
    const progress = storage.calculateProgress(ATIVIDADES);

    // Barra e texto
    this.progressBarFill.style.width = `${progress.overallPercent}%`;
    this.trackerStatsText.textContent = `${progress.answeredQuestions} de ${progress.totalQuestions} respostas preenchidas (${progress.overallPercent}%)`;

    // Atualiza cada botão do stepper
    this.stepButtons.forEach((btn, idx) => {
      const ativ = ATIVIDADES[idx];
      const st = progress.activityStatus[ativ.id];
      const statusText = btn.querySelector('.step-status');

      if (st && st.isComplete) {
        btn.classList.add('complete');
        if (statusText) statusText.textContent = 'Concluída';
      } else if (st && st.isStarted) {
        btn.classList.remove('complete');
        if (statusText) statusText.textContent = `${st.answered}/${st.total} itens`;
      } else {
        btn.classList.remove('complete');
        if (statusText) statusText.textContent = 'Pendente';
      }
    });
  }

  // ==================== TELA DE RELATÓRIO FINAL ====================
  renderReportContent() {
    const student = this.student || storage.getStudent() || {};
    const responses = storage.getAllResponses();
    const progress = storage.calculateProgress(ATIVIDADES);

    // Preenche Metadados
    document.getElementById('rep-aluno-nome').textContent = student.nome || 'Não identificado';
    document.getElementById('rep-aluno-email').textContent = student.email || '-';
    document.getElementById('rep-aluno-curso').textContent = student.curso || 'Licenciatura em Física';
    document.getElementById('rep-aluno-matricula').textContent = student.matricula || 'Não informada';
    document.getElementById('sig-student-name').textContent = student.nome ? `${student.nome}` : 'Assinatura do Aluno';

    const now = new Date();
    document.getElementById('rep-data-conclusao').textContent = now.toLocaleDateString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    document.getElementById('rep-status-progresso').textContent = 
      `${progress.answeredQuestions} de ${progress.totalQuestions} questões respondidas (${progress.overallPercent}%)`;

    // Constrói Corpo do Relatório
    this.relatorioCorpo.innerHTML = '';

    ATIVIDADES.forEach(ativ => {
      const ativGroup = document.createElement('section');
      ativGroup.className = 'report-activity-group print-activity-section';

      let questoesHtml = '';
      ativ.questoes.forEach(q => {
        const ans = (responses[q.id] || '').trim();
        const hasAns = ans.length > 0;

        questoesHtml += `
          <div class="report-question-box print-question-item">
            <div class="report-question-text print-question-prompt">
              Questão ${q.numero}: ${q.enunciado}
            </div>
            <div class="report-answer-box print-question-answer ${!hasAns ? 'report-answer-empty print-question-empty' : ''}">
              ${hasAns ? ans : '[Nenhuma resposta foi preenchida para esta questão]'}
            </div>
          </div>
        `;
      });

      ativGroup.innerHTML = `
        <div class="report-activity-title print-activity-header">
          <h3 class="print-activity-title">Atividade ${ativ.numero}: ${ativ.titulo}</h3>
          <div class="print-activity-domain">Domínio: ${ativ.categoria}</div>
        </div>
        ${questoesHtml}
      `;

      this.relatorioCorpo.appendChild(ativGroup);
    });
  }

  // ==================== IMPRESSÃO & PDF ====================
  triggerPrintPdf() {
    this.showToast("Preparando relatório para impressão/PDF...", "info");
    setTimeout(() => {
      window.print();
    }, 200);
  }

  // ==================== ENVIO POR E-MAIL ====================
  openEmailModal() {
    this.inputEmailDestinatario.value = AVALIACAO_METADATA.emailProfessorPadrao;
    this.emailModal.classList.add('active');
  }

  closeEmailModal() {
    this.emailModal.classList.remove('active');
  }

  executeMailto() {
    const student = this.student || storage.getStudent() || {};
    const dest = this.inputEmailDestinatario.value.trim() || AVALIACAO_METADATA.emailProfessorPadrao;
    const progress = storage.calculateProgress(ATIVIDADES);

    const subject = encodeURIComponent(
      `[IFCE: Informática no Ensino da Física] Avaliação 2026.2: ${student.nome || 'Aluno'}`
    );

    const bodyText = 
`Prezado(a) Professor(a),

Segue a entrega da Avaliação da disciplina de Informática Aplicada ao Ensino da Física (Semestre 2026.2, IFCE).

DADOS DO DISCENTE:
* Nome: ${student.nome || ''}
* E-mail: ${student.email || ''}
* Curso: ${student.curso || 'Licenciatura em Física'}
* Matrícula: ${student.matricula || 'Não informada'}
* Total de Questões Respondidas: ${progress.answeredQuestions} de ${progress.totalQuestions} (${progress.overallPercent}%)

* NOTA IMPORTANTE: Por favor, localize em anexo o arquivo oficial 'Relatório_Avaliacao_${(student.nome || 'Aluno').replace(/\s+/g, '_')}.pdf' gerado pela plataforma.

Atenciosamente,
${student.nome || ''}`;

    const mailtoUri = `mailto:${dest}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    
    this.closeEmailModal();
    this.showToast("Abrindo seu aplicativo de e-mail...", "success");
    window.location.href = mailtoUri;
  }

  // ==================== CÓPIA DE TEXTO ====================
  copyReportSummary() {
    const student = this.student || storage.getStudent() || {};
    const responses = storage.getAllResponses();
    const progress = storage.calculateProgress(ATIVIDADES);

    let summaryText = `========================================================\n`;
    summaryText += `IFCE: LICENCIATURA EM FÍSICA\n`;
    summaryText += `DISCIPLINA: INFORMÁTICA APLICADA AO ENSINO DA FÍSICA\n`;
    summaryText += `RELATÓRIO DE AVALIAÇÃO: SEMESTRE 2026.2\n`;
    summaryText += `========================================================\n\n`;
    summaryText += `ALUNO: ${student.nome || ''}\n`;
    summaryText += `E-MAIL: ${student.email || ''}\n`;
    summaryText += `CURSO: ${student.curso || ''}\n`;
    summaryText += `MATRÍCULA: ${student.matricula || 'N/A'}\n`;
    summaryText += `DATA/HORA: ${new Date().toLocaleString('pt-BR')}\n`;
    summaryText += `STATUS: ${progress.answeredQuestions}/${progress.totalQuestions} respondidas (${progress.overallPercent}%)\n\n`;

    ATIVIDADES.forEach(ativ => {
      summaryText += `--------------------------------------------------------\n`;
      summaryText += `ATIVIDADE ${ativ.numero}: ${ativ.titulo}\n`;
      summaryText += `(${ativ.categoria})\n`;
      summaryText += `--------------------------------------------------------\n`;
      
      ativ.questoes.forEach(q => {
        const ans = (responses[q.id] || '').trim();
        summaryText += `\n[Questão ${q.numero}] ${q.enunciado}\n`;
        summaryText += `Resposta: ${ans || '[Não respondida]'}\n`;
      });
      summaryText += `\n`;
    });

    navigator.clipboard.writeText(summaryText).then(() => {
      this.showToast("Texto completo do relatório copiado para a área de transferência!", "success");
    }).catch(err => {
      console.error(err);
      this.showToast("Falha ao copiar. Tente selecionar o texto manualmente.", "warning");
    });
  }

  // ==================== MODAL DE BACKUP / SINCRONIZAÇÃO ====================
  openBackupModal() {
    const code = storage.exportBackupCode();
    this.exportCodeBox.value = code;
    this.backupModal.classList.add('active');
  }

  closeBackupModal() {
    this.backupModal.classList.remove('active');
  }

  downloadBackupJson() {
    const data = storage.exportBackupData();
    const studentName = (data.student && data.student.nome ? data.student.nome : 'aluno')
      .toLowerCase().replace(/[^a-z0-9]/g, '_');
    const filename = `backup_avaliacao_fisica_${studentName}_${Date.now()}.json`;

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showToast("Arquivo de backup baixado com sucesso!", "success");
  }

  copyBackupCode() {
    const code = this.exportCodeBox.value;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      this.showToast("Código copiado! Cole-o no seu celular ou envie via mensagem.", "success");
    });
  }

  handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        storage.importBackupData(parsed);
        this.student = storage.getStudent();
        this.setupLoggedInHeader(this.student);
        this.closeBackupModal();
        this.showAssessmentView();
        this.renderCurrentActivity();
        this.updateProgressAndStepper();
        this.showToast("Dados e respostas importados com sucesso!", "success");
      } catch (err) {
        alert("Erro ao ler o arquivo JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  applyCodeImport() {
    const code = this.importCodeBox.value.trim();
    if (!code) {
      this.showToast("Cole o código de transferência primeiro.", "warning");
      return;
    }

    try {
      storage.importBackupCode(code);
      this.student = storage.getStudent();
      this.setupLoggedInHeader(this.student);
      this.closeBackupModal();
      this.showAssessmentView();
      this.renderCurrentActivity();
      this.updateProgressAndStepper();
      this.showToast("Respostas restauradas com sucesso!", "success");
    } catch (err) {
      alert("Código inválido ou corrompido: " + err.message);
    }
  }

  // ==================== TOAST NOTIFICATIONS ====================
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'bi-info-circle-fill';
    if (type === 'success') icon = 'bi-check-circle-fill';
    if (type === 'warning') icon = 'bi-exclamation-triangle-fill';

    toast.innerHTML = `
      <i class="bi ${icon}" style="font-size: 1.15rem;"></i>
      <div style="flex: 1;">${message}</div>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Inicialização imediata após carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AppController();
});
