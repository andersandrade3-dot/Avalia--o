/**
 * Avaliação da Disciplina: Informática Aplicada ao Ensino da Física
 * Curso: Licenciatura em Física (IFCE)
 * Estrutura de dados das 5 Atividades Pedagógicas
 */

export const AVALIACAO_METADATA = {
  instituicao: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)",
  departamento: "Departamento de Física / Licenciatura em Física",
  disciplina: "Informática Aplicada ao Ensino da Física",
  semestrePadrao: "2026.2",
  titulo: "Avaliação Prática e Reflexiva: Tecnologias Digitais e Práxis Docente em Física",
  totalAtividades: 3,
  instrucoesGerais: [
    "Responda a todas as questões com fundamentação teórico-prática e clareza argumentativa.",
    "O progresso é salvo automaticamente neste navegador a cada digitação.",
    "Caso deseje alternar entre dispositivos (ex: computador da instituição e celular), utilize o botão 'Sincronizar / Backup' no menu superior.",
    "Ao concluir, gere o Relatório Final em PDF, baixe-o e envie ao professor responsável via e-mail."
  ]
};

export const ATIVIDADES = [
  {
    id: 1,
    numero: 1,
    titulo: "Estudo de Caso: Prática Docente, Infraestrutura e Resiliência Tecnológica",
    categoria: "Mediação Pedagógica & Infraestrutura Escolar",
    tempoEstimado: "25-35 min",
    icone: "bi-building-gear",
    contexto: `A professora Celinha encontrou na Internet um vídeo público sobre uma abordagem lúdica do ensino da Física. Ficou toda animada com a possibilidade de utilizá-lo com seus alunos do Ensino Médio, para tentar desmistificar as barreiras que seus alunos tinham quanto a essa disciplina. Salvou o vídeo no seu computador, testou-o em casa e, a partir do vídeo, criou um roteiro para ajudar seus alunos na observação e compreensão do conteúdo apresentado.<br><br>
A professora já sabia que sua sala de aula dispunha de computador, projetor multimídia e acesso à Internet, recursos que já haviam sido utilizados em outras ocasiões. Avisou com antecedência ao funcionário responsável pelos recursos tecnológicos sobre a necessidade de deixar tudo preparado. Mesmo assim, levou seu notebook pessoal para o caso de algo não dar certo e, se necessário, utilizar outro equipamento disponível na escola.<br><br>
Quando foi utilizar as tecnologias, o computador da sala não conseguiu acessar a Internet e o projetor apresentou problemas para transmitir a imagem. A professora tentou utilizar outra sala, que estava sem turma, mas o computador disponível também apresentou dificuldades de acesso à Internet. A sorte da professora Celinha é que ela havia elaborado um estudo dirigido a partir de um texto e, assim, enquanto as tentativas iam sendo feitas, a turma tinha outra tarefa para realizar. Por outro lado, o funcionário responsável pelos recursos tecnológicos esteve todo o tempo ao lado da professora, contribuindo para a solução do problema.<br><br>
Finalmente, o vídeo foi exibido através do notebook da professora conectado ao projetor da escola. A única coisa que não ficou muito boa foi o som, mas os alunos ficaram bem quietos e conseguiram ouvir. A seguir, ocorreu um debate sobre o que havia sido visto e a professora solicitou um trabalho de pesquisa e produção de conteúdo sobre um fenômeno físico observado no cotidiano, utilizando fotografias, vídeos ou outros recursos digitais, trazendo o conteúdo estudado para a realidade dos alunos e transformando-os em produtores de conteúdo sobre a Física.`,
    questoes: [
      {
        id: "q1_1",
        numero: "1",
        enunciado: "Como você classifica o trabalho de preparação da professora?",
        orientacao: "Avalie o planejamento pedagógico prévio, a antecipação de falhas tecnológicas (plano B com estudo dirigido e notebook próprio) e a articulação com o suporte escolar.",
        placeholder: "Analise a postura metodológica, prevenção de imprevistos e organização da professora Celinha..."
      },
      {
        id: "q1_2",
        numero: "2",
        enunciado: "Há alguma sugestão a ser feita quanto aos recursos tecnológicos envolvidos?",
        orientacao: "Considere aspectos como testes prévios no ambiente real da escola, equipamentos de áudio (caixas de som externas/amplificadores), mídias offline em pendrive e redundância de conexões.",
        placeholder: "Aponte melhorias técnicas e logísticas para os equipamentos e infraestrutura da sala..."
      },
      {
        id: "q1_3",
        numero: "3",
        enunciado: "Se a escola não tem alguém responsável pela tecnologia, como se deve agir?",
        orientacao: "Aborde estratégias de autonomia docente, formação continuada, mapeamento preventivo dos equipamentos disponíveis e planos de aula resilientes a ausências de suporte técnico.",
        placeholder: "Discuta a postura docente diante da ausência de suporte técnico na instituição..."
      },
      {
        id: "q1_4",
        numero: "4",
        enunciado: "Opine sobre a tarefa solicitada pela professora ao final da aula.",
        orientacao: "Reflita sobre a transição do aluno de espectador passivo para produtor autônomo de conteúdo digital (vídeos, fotos) e a relação do conteúdo de Física com seu cotidiano.",
        placeholder: "Comente o valor pedagógico da proposta de produção de mídias pelos próprios estudantes..."
      }
    ]
  },
  {
    id: 2,
    numero: 2,
    tituloCurto: "2. Tecnologias na Prática",
    titulo: "Tecnologias Educacionais na Prática: Intencionalidade e Realidade Escolar",
    categoria: "Análise da Reportagem Oficial da Revista Nova Escola & Prática em Física",
    tempoEstimado: "20-30 min",
    icone: "bi-journal-text",
    contexto: `A reportagem define tecnologias educacionais como processos, ferramentas e materiais que apoiam desde a gestão escolar até o processo de aprendizagem, englobando tanto recursos digitais quanto experiências offline. O texto destaca que a implementação eficaz dessas ferramentas depende de intencionalidade pedagógica, ultrapassando a simples oferta de infraestrutura para alcançar metodologias de criação e experimentação que coloquem o aluno no centro. Além de atender às diretrizes da Base Nacional Comum Curricular (BNCC) para o ensino da computação e cultura digital, o uso da tecnologia promove engajamento e pode ser adaptado a realidades sem acesso à internet por meio de plataformas que operam offline e atividades desplugadas.<br><br>
<div class="source-box-card" style="margin-top:1.25rem;margin-bottom:0;">
  <div class="source-box-title"><i class="bi bi-link-45deg"></i> Link de acesso à reportagem:</div>
  <p style="margin: 0.6rem 0 0 0; font-size: 0.95rem;">
    <a href="https://novaescola.org.br/conteudo/21894/tecnologias-educacionais-o-que-sao-e-como-usa-las-na-pratica" target="_blank" rel="noopener" style="word-break: break-all; color: var(--primary-600); font-weight: 500; text-decoration: underline;">https://novaescola.org.br/conteudo/21894/tecnologias-educacionais-o-que-sao-e-como-usa-las-na-pratica</a>
  </p>
</div>`,
    questoes: [
      {
        id: "q2_1",
        numero: "1",
        enunciado: "Considerando os obstáculos materiais e a infraestrutura desigual nas escolas públicas brasileiras retratados na matéria, que estratégias didáticas resilientes e acessíveis você, como futuro(a) professor(a) de Física, pode adotar para garantir práticas ricas com tecnologia?",
        placeholder: "Apresente estratégias práticas e alternativas viáveis para aplicar tecnologias no ensino de Física mesmo em escolas com infraestrutura deficitária..."
      }
    ]
  },
  {
    id: 3,
    numero: 3,
    tituloCurto: "3. IA no Ensino de Física",
    titulo: "Inteligência Artificial Generativa e Avaliação Autêntica em Física",
    categoria: "Tecnologias Emergentes & Ética Educacional",
    tempoEstimado: "20-25 min",
    icone: "bi-cpu",
    contexto: `A popularização de ferramentas de Inteligência Artificial Generativa, como ChatGPT, Gemini e Claude, permite que fórmulas e cálculos sejam resolvidos rapidamente. Nesse cenário, avaliações baseadas apenas na aplicação mecânica de fórmulas podem não ser suficientes para verificar se o estudante realmente compreendeu o conteúdo. Por isso, torna-se importante propor questões que também avaliem a interpretação, o raciocínio e a aplicação dos conceitos em situações-problema.<br><br>
Ao mesmo tempo, as IAs frequentemente apresentam alucinações conceituais em Física, gerando explicações matematicamente convincentes, porém fisicamente absurdas ou equivocadas em situações de fronteira. Esse cenário impõe ao professor de Física o desafio de repensar suas avaliações, valorizando o raciocínio crítico, a modelagem conceitual e o letramento científico digital.`,
    questoes: [
      {
        id: "q3_1",
        numero: "1",
        enunciado: "Como o professor de Física pode utilizar a IA Generativa a seu favor no planejamento didático (por exemplo, na elaboração de situações-problema contextualizadas ou roteiros didáticos diferenciados)?",
        orientacao: "Cite aplicações práticas produtivas da IA para o docente de Física, ressaltando o papel da curadoria e da mediação humana.",
        placeholder: "Destaque estratégias como geração de analogias físicas, criação de estudos de caso para debate e adaptação de níveis conceituais..."
      },
      {
        id: "q3_2",
        numero: "2",
        enunciado: "Diante da facilidade dos estudantes em obter respostas imediatas geradas por IA, que tipo de atividade avaliativa o professor deve priorizar para avaliar a autêntica compreensão física em vez da cópia passiva?",
        orientacao: "Sugira metodologias ativas (seminários conceituais, defesa oral de experimentos, análise crítica de respostas geradas por IA, portfólios reflexivos).",
        placeholder: "Apresente novos formatos avaliativos: análise de erros de respostas geradas por IA, arguições conceituais, projetos práticos..."
      },
      {
        id: "q3_3",
        numero: "3",
        enunciado: "Como trabalhar com os alunos do Ensino Médio a identificação crítica de 'alucinações' e equívocos conceituais cometidos por IAs ao resolverem problemas físicos, desenvolvendo neles uma atitude científica?",
        orientacao: "Trate da importância da verificação empírica, coerência dimensional, leis de conservação e postura cética investigativa.",
        placeholder: "Descreva uma atividade em que os alunos devem auditar as respostas de uma IA, checando unidades, conservação de energia e lógica física..."
      }
    ]
  }
];
