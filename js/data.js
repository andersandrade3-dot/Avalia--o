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
    contexto: `A professora Celinha encontrou na Internet um vídeo público sobre uma abordagem lúdica do ensino da <strong>Física</strong>. Ficou toda animada com a possibilidade de utilizá-lo com seus alunos do Ensino Médio, para tentar desmistificar as barreiras que seus alunos tinham quanto a essa disciplina. Salvou o vídeo no seu computador, testou-o em casa e, a partir do vídeo, criou um roteiro para ajudar seus alunos na observação e compreensão do conteúdo apresentado.<br><br>
A professora já sabia que sua sala de aula dispunha de <strong>computador, projetor multimídia e acesso à Internet</strong>, recursos que já haviam sido utilizados em outras ocasiões. Avisou com antecedência ao funcionário responsável pelos recursos tecnológicos sobre a necessidade de deixar tudo preparado. Mesmo assim, levou seu <strong>notebook pessoal</strong> para o caso de algo não dar certo e, se necessário, utilizar outro equipamento disponível na escola.<br><br>
Quando foi utilizar as tecnologias, o <strong>computador da sala não conseguiu acessar a Internet</strong> e o projetor apresentou problemas para transmitir a imagem. A professora tentou utilizar outra sala, que estava sem turma, mas o computador disponível também apresentou dificuldades de acesso à Internet. A sorte da professora Celinha é que ela havia elaborado um estudo dirigido a partir de um texto e, assim, enquanto as tentativas iam sendo feitas, a turma tinha outra tarefa para realizar. Por outro lado, o funcionário responsável pelos recursos tecnológicos esteve todo o tempo ao lado da professora, contribuindo para a solução do problema.<br><br>
Finalmente, o vídeo foi exibido através do <strong>notebook da professora conectado ao projetor da escola</strong>. A única coisa que não ficou muito boa foi o som, mas os alunos ficaram bem quietos e conseguiram ouvir. A seguir, ocorreu um debate sobre o que havia sido visto e a professora solicitou um <strong>trabalho de pesquisa e produção de conteúdo sobre um fenômeno físico observado no cotidiano</strong>, utilizando fotografias, vídeos ou outros recursos digitais, trazendo o conteúdo estudado para a realidade dos alunos e transformando-os em produtores de conteúdo sobre a Física.`,
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
    tituloCurto: "2. Tecnologias na Prática (Nova Escola)",
    titulo: "Tecnologias Educacionais na Prática: Intencionalidade, Criação e Realidade Escolar",
    categoria: "Análise da Reportagem Oficial da Revista Nova Escola & Prática em Física",
    tempoEstimado: "45-55 min",
    icone: "bi-journal-text",
    contexto: `Esta atividade é dedicada integralmente à análise crítica e à aplicação pedagógica da reportagem oficial da <strong>Revista Nova Escola</strong>: <em>"Tecnologias educacionais: o que são e como usá-las na prática?"</em>. Abaixo, o conteúdo está organizado em <strong>3 eixos temáticos derivados diretamente da matéria</strong>, cada um acompanhado imediatamente de suas duas questões formativas correspondentes para o ensino de Física:`,
    eixos: [
      {
        id: "eixo1",
        numero: 1,
        icone: "bi-lightbulb",
        titulo: "EIXO 1: O que São Tecnologias Educacionais & O Risco do 'Uso pelo Uso'",
        subtitulo: "Conceituação Ampliada, Intencionalidade Pedagógica e Superação do Tecnocentrismo",
        conteudo: `
A reportagem da <strong>Revista Nova Escola</strong>, intitulada <em>"Tecnologias educacionais: o que são e como usá-las na prática?"</em>, traz uma reflexão fundamental de especialistas para desmistificar o papel dos recursos tecnológicos na educação contemporânea:<br><br>
• <strong>Conceito Ampliado de Tecnologia Educacional:</strong> Especialistas esclarecem que tecnologia educacional <strong>não se restringe a equipamentos digitais caros ou de última geração</strong> (como lousas digitais, óculos VR ou tablets). Trata-se de qualquer recurso, digital ou analógico, mobilizado com uma clara <strong>intencionalidade pedagógica</strong> para enriquecer os processos de ensino e de aprendizagem.<br><br>
• <strong>A Ilusão do Tecnocentrismo (O 'Uso pelo Uso'):</strong> A matéria adverte enfaticamente contra o equívoco de acreditar que apenas preencher a sala de aula com computadores ou dispositivos eletrônicos inova a prática educativa. Quando a tecnologia é utilizada como mero atrativo pirotécnico ou entretenimento desvinculado dos objetivos curriculares, ela gera dispersão em vez de aprendizado. A tecnologia é um <strong>meio facilitador</strong>, jamais a finalidade da aula.
<div class="source-box-card" style="margin-top:1.25rem;margin-bottom:0;">
  <div class="source-box-title"><i class="bi bi-bookmark-check-fill"></i> FONTE DA REPORTAGEM:</div>
  <ul class="source-links-list">
    <li><strong>Revista Nova Escola (Matéria Oficial 21894):</strong> <em>"Tecnologias educacionais: o que são e como usá-las na prática?"</em>. <a href="https://novaescola.org.br/conteudo/21894/tecnologias-educacionais-o-que-sao-e-como-usa-las-na-pratica" target="_blank" rel="noopener">Acessar Artigo Completo na Nova Escola <i class="bi bi-box-arrow-up-right"></i></a></li>
  </ul>
</div>`,
        questoes: [
          {
            id: "q2_1",
            numero: "1",
            enunciado: "De acordo com os especialistas entrevistados na reportagem da Nova Escola, o que define autenticamente uma tecnologia como 'educacional'? Por que a simples presença de dispositivos digitais modernos (como computadores, tablets ou lousas interativas) na sala de aula não é suficiente para garantir inovação pedagógica ou uma melhor compreensão dos conceitos físicos?",
            orientacao: "Destaque a definição de tecnologia educacional apresentada na matéria, ressaltando que o fator decisivo não é o suporte físico ou eletrônico em si, mas a intencionalidade pedagógica com que ele é integrado ao currículo.",
            placeholder: "Explique a definição de tecnologias educacionais segundo a reportagem e justifique por que o equipamento por si só não inova o ensino de Física..."
          },
          {
            id: "q2_2",
            numero: "2",
            enunciado: "A reportagem adverte enfaticamente contra o chamado 'uso da tecnologia pelo simples uso' (ou fetiche da novidade). Explique o perigo do tecnocentrismo no ensino de Física e analise como a ausência de uma intencionalidade pedagógica clara pode transformar recursos tecnológicos avançados em meros instrumentos de distração ou entretenimento sem ganho cognitivo.",
            orientacao: "Aborde o risco de colocar o aparelho no centro do planejamento em vez dos objetivos de aprendizagem da Física. Diferencie 'usar tecnologia como atrativo estético' de 'usar tecnologia como facilitador de aprendizagem'.",
            placeholder: "Analise o risco do uso pelo simples uso e detalhe como a falta de objetivos pedagógicos claros prejudica a aprendizagem conceitual em Física..."
          }
        ]
      },
      {
        id: "eixo2",
        numero: 2,
        icone: "bi-tools",
        titulo: "EIXO 2: Tecnologia de Ensino (Exposição) vs. Tecnologia de Aprendizagem (Criação)",
        subtitulo: "Do Consumo Passivo ao Protagonismo e Investigação Científica em Física",
        conteudo: `
Um dos pontos centrais abordados pelos educadores na reportagem da Nova Escola é a distinção pedagógica crucial entre duas formas opostas de utilizar os recursos tecnológicos na sala de aula:<br><br>
• <strong>Tecnologia de Ensino (Foco Expositivo):</strong> Ocorre quando o recurso digital é utilizado exclusivamente pelo professor para projetar apresentações, exibir vídeos ilustrativos ou demonstrar fórmulas prontas. Nessa abordagem transmissiva, o estudante permanece como mero receptor ou espectador passivo da informação na tela.<br><br>
• <strong>Tecnologia para Aprender e Criar (Foco no Protagonismo Discente):</strong> Ocorre quando as ferramentas digitais são disponibilizadas para que os próprios <strong>estudantes manipulem parâmetros, investiguem problemas, criem hipóteses e construam conhecimento científico</strong> de forma autônoma e colaborativa (como na coleta de dados experimentais, modelagem de simulações interativas ou produção de mídias científicas autorais).
<div class="source-box-card" style="margin-top:1.25rem;margin-bottom:0;">
  <div class="source-box-title"><i class="bi bi-bookmark-check-fill"></i> FONTE DA REPORTAGEM:</div>
  <ul class="source-links-list">
    <li><strong>Revista Nova Escola (Matéria Oficial 21894):</strong> <em>"Tecnologias educacionais: o que são e como usá-las na prática?"</em>. <a href="https://novaescola.org.br/conteudo/21894/tecnologias-educacionais-o-que-sao-e-como-usa-las-na-pratica" target="_blank" rel="noopener">Acessar Artigo Completo na Nova Escola <i class="bi bi-box-arrow-up-right"></i></a></li>
  </ul>
</div>`,
        questoes: [
          {
            id: "q2_3",
            numero: "3",
            enunciado: "Uma das distinções centrais apontadas na matéria da Nova Escola é o contraste entre 'tecnologia para ensinar' (foco na exposição docente) e 'tecnologia para aprender e criar' (foco no protagonismo discente). Compare detalhadamente essas duas abordagens e explique por que promover a autoria e a investigação ativa pelos estudantes resulta em uma formação científica mais sólida em Física.",
            orientacao: "Confronte a postura do aluno como receptor passivo de demonstrações na tela com a postura do aluno como agente que formula hipóteses, analisa dados e constrói representações do fenômeno físico.",
            placeholder: "Compare as tecnologias de ensino com as tecnologias de aprendizagem/criação, argumentando sobre as vantagens cognitivas do protagonismo estudantil..."
          },
          {
            id: "q2_4",
            numero: "4",
            enunciado: "Com base nas recomendações práticas da reportagem para superar o modelo meramente expositivo, elabore uma proposta de atividade didática para um conteúdo específico de Física (ex: Leis do Movimento, Calorimetria, Circuitos Elétricos ou Óptica Geométrica) na qual os alunos utilizem tecnologias digitais como ferramentas de criação, modelagem ou investigação autônoma.",
            orientacao: "Indique o conteúdo de Física, o recurso tecnológico pretendido (ex: simulações interativas PhET, gravação e análise de movimento com Tracker, sensores do celular com Phyphox ou planilhas) e como os alunos atuarão na prática.",
            placeholder: "Descreva o conteúdo de Física, a ferramenta tecnológica selecionada e as etapas em que os alunos investigam, manipulam parâmetros e produzem conclusões..."
          }
        ]
      },
      {
        id: "eixo3",
        numero: 3,
        icone: "bi-newspaper",
        titulo: "EIXO 3: Mediação Pedagógica, Desafios da Escola Real e Recursos Acessíveis",
        subtitulo: "O Papel Humano Insubstituível e a Construção de Práticas Inclusivas e Resilientes",
        conteudo: `
A reportagem da Nova Escola reforça que nenhuma inovação tecnológica substitui o fator humano decisivo: a <strong>mediação do professor</strong>.<br><br>
• <strong>A Mediação Docente Insubstituível:</strong> A máquina não ensina sozinha. É o planejamento prévio, a formulação de boas perguntas orientadoras e o acompanhamento pedagógico do professor que transformam uma ferramenta digital em instrumento efetivo de aprendizagem significativa.<br><br>
• <strong>Realidade e Desafios Estruturais nas Escolas:</strong> A matéria discute as barreiras concretas da educação brasileira (como conectividade instável, laboratórios sucateados e escassez de computadores), ressaltando a importância de estratégias criativas, inclusivas e resilientes (uso de aplicativos offline, sensores presentes nos smartphones dos próprios estudantes e práticas em grupos colaborativos).<br><br>
<div class="news-preview-container">
  <div class="news-preview-bar">
    <span class="browser-dot red"></span>
    <span class="browser-dot yellow"></span>
    <span class="browser-dot green"></span>
    <span class="browser-url-text"><i class="bi bi-lock-fill"></i> https://novaescola.org.br/conteudo/21894/tecnologias-educacionais-o-que-sao-e-como-usa-las-na-pratica</span>
  </div>
  <img src="img/noticia-nova-escola-2026.png" alt="Reprodução da Matéria da Revista Nova Escola: Tecnologias educacionais: o que são e como usá-las na prática?" class="news-preview-img" onclick="window.open(this.src,'_blank')" title="Clique na imagem para visualizar em alta resolução">
  <div class="news-caption">
    <div><strong>Figura 1:</strong> Reportagem da Revista Nova Escola (conteúdo 21894): diretrizes práticas e intencionalidade pedagógica no uso de tecnologias educacionais.</div>
    <div class="news-caption-badge"><i class="bi bi-check-circle-fill"></i> Fonte: Nova Escola (Reportagem Oficial)</div>
  </div>
</div>
<div class="source-box-card" style="margin-top:1.25rem;margin-bottom:0;">
  <div class="source-box-title"><i class="bi bi-bookmark-check-fill"></i> FONTES E LINKS OFICIAIS DESTA REPORTAGEM:</div>
  <ul class="source-links-list">
    <li><strong>Revista Nova Escola (Matéria Oficial):</strong> <em>"Tecnologias educacionais: o que são e como usá-las na prática?"</em>. <a href="https://novaescola.org.br/conteudo/21894/tecnologias-educacionais-o-que-sao-e-como-usa-las-na-pratica" target="_blank" rel="noopener">Acessar Matéria na Revista Nova Escola <i class="bi bi-box-arrow-up-right"></i></a></li>
    <li><strong>Revista Nova Escola (Acervo Histórico):</strong> <em>"Tecnologia na escola: tem mais, mas ainda é pouco"</em>. <a href="https://novaescola.org.br/conteudo/1758/tecnologia-na-escola-tem-mais-mas-ainda-e-pouco" target="_blank" rel="noopener">Acessar no Acervo Nova Escola <i class="bi bi-box-arrow-up-right"></i></a></li>
    <li><strong>Cetic.br / NIC.br:</strong> <em>Pesquisa TIC Educação: Conectividade e Uso de Tecnologias nas Escolas Brasileiras</em>. <a href="https://cetic.br/pt/pesquisa/educacao/" target="_blank" rel="noopener">Acessar Portal Cetic.br <i class="bi bi-box-arrow-up-right"></i></a></li>
  </ul>
</div>`,
        questoes: [
          {
            id: "q2_5",
            numero: "5",
            enunciado: "Conforme enfatizado na matéria da Nova Escola, nenhuma tecnologia é autossuficiente ou substitui a intervenção humana qualificada. Qual é o papel crucial da mediação pedagógica do professor de Física antes, durante e após a utilização de recursos tecnológicos com a turma? Por que a ferramenta tecnológica deve ser compreendida sempre como meio e nunca como o fim da ação educativa?",
            orientacao: "Discuta a curadoria prévia de ferramentas, a formulação de problemas desafiadores durante a aula e a sistematização conceitual coletiva após a atividade prática.",
            placeholder: "Detalhe as atribuições da mediação pedagógica docente e justifique por que a tecnologia é ferramenta intermediária para o desenvolvimento do pensamento físico..."
          },
          {
            id: "q2_6",
            numero: "6",
            enunciado: "Considerando os obstáculos materiais e a infraestrutura desigual nas escolas públicas brasileiras retratados na matéria, que estratégias didáticas resilientes e acessíveis você, como futuro(a) professor(a) de Física, pode adotar para garantir práticas ricas com tecnologia (ex: uso de recursos offline, aproveitamento pedagógico dos smartphones dos próprios estudantes ou experimentos colaborativos em grupo)?",
            orientacao: "Proponha soluções realistas e resilientes para escolas com limitações materiais, articulando criatividade didática, recursos gratuitos e democratização do acesso aos recursos de aprendizagem.",
            placeholder: "Apresente estratégias práticas e alternativas viáveis para aplicar tecnologias no ensino de Física mesmo em escolas com infraestrutura deficitária..."
          }
        ]
      }
    ],
    questoes: [
      {
        id: "q2_1",
        numero: "1",
        enunciado: "De acordo com os especialistas entrevistados na reportagem da Nova Escola, o que define autenticamente uma tecnologia como 'educacional'? Por que a simples presença de dispositivos digitais modernos (como computadores, tablets ou lousas interativas) na sala de aula não é suficiente para garantir inovação pedagógica ou uma melhor compreensão dos conceitos físicos?",
        orientacao: "Destaque a definição de tecnologia educacional apresentada na matéria, ressaltando que o fator decisivo não é o suporte físico ou eletrônico em si, mas a intencionalidade pedagógica com que ele é integrado ao currículo.",
        placeholder: "Explique a definição de tecnologias educacionais segundo a reportagem e justifique por que o equipamento por si só não inova o ensino de Física..."
      },
      {
        id: "q2_2",
        numero: "2",
        enunciado: "A reportagem adverte enfaticamente contra o chamado 'uso da tecnologia pelo simples uso' (ou fetiche da novidade). Explique o perigo do tecnocentrismo no ensino de Física e analise como a ausência de uma intencionalidade pedagógica clara pode transformar recursos tecnológicos avançados em meros instrumentos de distração ou entretenimento sem ganho cognitivo.",
        orientacao: "Aborde o risco de colocar o aparelho no centro do planejamento em vez dos objetivos de aprendizagem da Física. Diferencie 'usar tecnologia como atrativo estético' de 'usar tecnologia como facilitador de aprendizagem'.",
        placeholder: "Analise o risco do uso pelo simples uso e detalhe como a falta de objetivos pedagógicos claros prejudica a aprendizagem conceitual em Física..."
      },
      {
        id: "q2_3",
        numero: "3",
        enunciado: "Uma das distinções centrais apontadas na matéria da Nova Escola é o contraste entre 'tecnologia para ensinar' (foco na exposição docente) e 'tecnologia para aprender e criar' (foco no protagonismo discente). Compare detalhadamente essas duas abordagens e explique por que promover a autoria e a investigação ativa pelos estudantes resulta em uma formação científica mais sólida em Física.",
        orientacao: "Confronte a postura do aluno como receptor passivo de demonstrações na tela com a postura do aluno como agente que formula hipóteses, analisa dados e constrói representações do fenômeno físico.",
        placeholder: "Compare as tecnologias de ensino com as tecnologias de aprendizagem/criação, argumentando sobre as vantagens cognitivas do protagonismo estudantil..."
      },
      {
        id: "q2_4",
        numero: "4",
        enunciado: "Com base nas recomendações práticas da reportagem para superar o modelo meramente expositivo, elabore uma proposta de atividade didática para um conteúdo específico de Física (ex: Leis do Movimento, Calorimetria, Circuitos Elétricos ou Óptica Geométrica) na qual os alunos utilizem tecnologias digitais como ferramentas de criação, modelagem ou investigação autônoma.",
        orientacao: "Indique o conteúdo de Física, o recurso tecnológico pretendido (ex: simulações interativas PhET, gravação e análise de movimento com Tracker, sensores do celular com Phyphox ou planilhas) e como os alunos atuarão na prática.",
        placeholder: "Descreva o conteúdo de Física, a ferramenta tecnológica selecionada e as etapas em que os alunos investigam, manipulam parâmetros e produzem conclusões..."
      },
      {
        id: "q2_5",
        numero: "5",
        enunciado: "Conforme enfatizado na matéria da Nova Escola, nenhuma tecnologia é autossuficiente ou substitui a intervenção humana qualificada. Qual é o papel crucial da mediação pedagógica do professor de Física antes, durante e após a utilização de recursos tecnológicos com a turma? Por que a ferramenta tecnológica deve ser compreendida sempre como meio e nunca como o fim da ação educativa?",
        orientacao: "Discuta a curadoria prévia de ferramentas, a formulação de problemas desafiadores durante a aula e a sistematização conceitual coletiva após a atividade prática.",
        placeholder: "Detalhe as atribuições da mediação pedagógica docente e justifique por que a tecnologia é ferramenta intermediária para o desenvolvimento do pensamento físico..."
      },
      {
        id: "q2_6",
        numero: "6",
        enunciado: "Considerando os obstáculos materiais e a infraestrutura desigual nas escolas públicas brasileiras retratados na matéria, que estratégias didáticas resilientes e acessíveis você, como futuro(a) professor(a) de Física, pode adotar para garantir práticas ricas com tecnologia (ex: uso de recursos offline, aproveitamento pedagógico dos smartphones dos próprios estudantes ou experimentos colaborativos em grupo)?",
        orientacao: "Proponha soluções realistas e resilientes para escolas com limitações materiais, articulando criatividade didática, recursos gratuitos e democratização do acesso aos recursos de aprendizagem.",
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
    contexto: `A rápida evolução das ferramentas de <strong>Inteligência Artificial Generativa</strong> (como ChatGPT, Gemini e Claude) e motores de cálculo simbólico (como Wolfram Alpha) tornou obsoletas as tradicionais avaliações baseadas exclusivamente na resolução algorítmica e mecânica de fórmulas pré-fabricadas.<br><br>
Ao mesmo tempo, as IAs frequentemente apresentam <em>alucinações conceituais</em> em Física, gerando explicações matematicamente convincentes, porém fisicamente absurdas ou equivocadas em situações de fronteira. Esse cenário impõe ao professor de Física o desafio de repensar suas avaliações, valorizando o raciocínio crítico, a modelagem conceitual e o letramento científico digital.`,
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
