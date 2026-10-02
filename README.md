# ⚛️ Plataforma de Avaliação: Informática Aplicada ao Ensino da Física

Aplicação web moderna, responsiva e de alta performance desenvolvida em **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, destinada à aplicação de questionários avaliativos para discentes de **Licenciatura em Física** do **IFCE (Instituto Federal do Ceará)**.

Pronta para publicação instantânea na **Vercel** e versionamento no **GitHub**, com zero dependências de build.

---

## 🚀 Funcionalidades Principais

### 1. Autenticação e Perfil do Aluno (Sessão Persistente)
- Tela inicial de Cadastro/Login: **Nome Completo**, **E-mail**, **Senha**, **Curso** (padrão: Licenciatura em Física) e **Matrícula**.
- **Persistência Total:** As respostas e os dados são salvos continuamente no navegador do aluno via `localStorage`, com salvamento automático (*auto-save* com debounce) a cada caractere digitado.
- **Sincronização entre Dispositivos:** Ferramenta integrada de **Backup / Sincronizar**, permitindo que o estudante inicie as respostas no computador do laboratório da escola e continue em seu celular ou computador pessoal através de exportação de arquivo `.json` ou código de transferência direta.
- Indicador visual em tempo real no cabeçalho (*"Salvo às HH:MM:SS"* e ponto pulsante).

### 2. Navegação Guiada e Acompanhamento de Progresso
- **5 Atividades Pedagógicas** completas integrando teoria, mediação docente e tecnologias no ensino de Física.
- **Barra de Progresso Dinâmica:** Percentual calculado em tempo real (ex: *"11 de 15 respostas preenchidas - 73%"*).
- **Navegador Stepper:** Botões numéricos de navegação entre as 5 atividades com marcadores visuais de status (*Pendente*, *Em andamento* ou *Concluída* com checkmark verde).
- Contadores de palavras e caracteres individuais por questão com caixas de diretrizes conceituais.

### 3. Geração de Relatório e Envio
- **Relatório Final Acadêmico:** Estruturado com dados do estudante, data de conclusão, status de progresso e todas as respostas detalhadas.
- **Impressão Otimizada para PDF (A4):** Folha de estilos `@media print` (`css/print.css`) desenhada sob medida para emissão em folhas A4, incluindo cabeçalho institucional do IFCE, quebras de página inteligentes (`break-inside: avoid`) e campos formais para assinatura do aluno e visto do professor.
- **Fluxo de E-mail:**
  - O aluno baixa o relatório oficial em PDF.
  - Clica em **"Enviar por E-mail"** para abrir automaticamente seu cliente padrão (Gmail, Outlook, Thunderbird) com assunto formatado (`[IFCE - Informática no Ensino da Física] Avaliação - Nome do Aluno`) e instruções claras para anexar o PDF.
  - Opção de **"Copiar Resumo em Texto"** para colagem rápida em plataformas virtuais (Google Classroom, Moodle ou corpo de e-mail).

---

## 📚 Estrutura das Atividades Pedagógicas

1. **Atividade 1: Estudo de Caso: Prática Docente, Infraestrutura e Resiliência**
   - *Cenário da Professora Celinha:* Análise de imprevistos com computador/projetor, elaboração de planos B, postura colaborativa do suporte técnico e a proposta de produção de conteúdo pelos alunos (vídeos e fotos de fenômenos cotidianos).
   - 4 questões reflexivas aplicadas.

2. **Atividade 2: Tecnologias Educacionais na Prática: Intencionalidade e Realidade Escolar**
   - *Análise da Reportagem da Revista Nova Escola (conteúdo 21894):* Contextualização sobre o conceito ampliado de tecnologias educacionais, intencionalidade pedagógica, BNCC e plataformas offline. Inclui link de acesso oficial à matéria.
   - 1 questão reflexiva sobre estratégias didáticas resilientes e acessíveis para lidar com obstáculos materiais e desigualdade de infraestrutura nas escolas públicas brasileiras.

3. **Atividade 3: Inteligência Artificial Generativa e Avaliação Autêntica em Física**
   - *Tecnologias Emergentes & Ética:* Como utilizar IA generativa no planejamento didático, avaliação autêntica e desenvolvimento de postura investigativa diante de alucinações conceituais.
   - 3 questões práticas para o futuro docente de Física.

---

## 🛠️ Estrutura de Arquivos

```
├── index.html          # Estrutura semântica, acessível e responsiva
├── vercel.json         # Configuração de rotas e segurança para a Vercel
├── .gitignore          # Arquivos e pastas ignorados no repositório Git
├── README.md           # Documentação completa do projeto
├── css/
│   ├── style.css       # Design System, variáveis, tipografia e responsividade
│   └── print.css       # Estilos específicos para emissão do PDF em folha A4
└── js/
    ├── data.js         # Dados estruturados das 5 atividades e metadados da disciplina
    ├── storage.js      # Gestão de LocalStorage, debounce, exportação/importação
    └── app.js          # Lógica da aplicação, navegação, relatórios e eventos
```

---

## 💻 Como Rodar Localmente

Por se tratar de uma aplicação em JavaScript modular (ES6 Modules), recomenda-se executar com um servidor local estático simples:

### Opção 1: Usando Python
```bash
# Na pasta do projeto:
python -m http.server 8000
# Acesse no navegador: http://localhost:8000
```

### Opção 2: Usando Node / npx
```bash
npx serve .
# Acesse a URL indicada no terminal (ex: http://localhost:3000)
```

### Opção 3: Extensão Live Server (VS Code)
Basta clicar com o botão direito no arquivo `index.html` e selecionar **"Open with Live Server"**.

---

## 🌐 Como Publicar na Vercel e Subir para o GitHub

### 1. Inicializar e Subir para o GitHub
```bash
git init
git add .
git commit -m "feat: Avaliacao interativa de Informatica no Ensino da Fisica - IFCE"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### 2. Publicar na Vercel (Gratuito)
1. Acesse [vercel.com](https://vercel.com/) e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Importe o repositório criado.
4. Na configuração do projeto, mantenha:
   - **Framework Preset:** *Other*
   - **Root Directory:** `./`
5. Clique em **"Deploy"**.
6. Em menos de 30 segundos, o link de produção estará no ar com HTTPS gratuito e suporte global!

---

## ⚙️ Personalização das Questões

Para alterar ou adicionar perguntas, basta editar o arquivo [`js/data.js`](js/data.js). Cada atividade possui a seguinte estrutura:

```javascript
{
  id: 1,
  numero: 1,
  titulo: "Título da Atividade",
  categoria: "Eixo Pedagógico",
  contexto: "Texto contextualizador ou estudo de caso...",
  questoes: [
    {
      id: "q1_1",
      numero: "1",
      enunciado: "Enunciado da pergunta?",
      orientacao: "Diretriz para reflexão do aluno...",
      placeholder: "Texto indicativo..."
    }
  ]
}
```

O sistema recalcula automaticamente a barra de progresso, relatórios e contadores conforme as modificações.

---

**IFCE - Instituto Federal de Educação, Ciência e Tecnologia do Ceará**  
*Curso de Licenciatura em Física • Disciplina de Informática Aplicada ao Ensino da Física*
