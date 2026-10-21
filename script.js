"use strict";

const scenes = {
  start: {
    chapter: 1,
    tag: "PRÓLOGO",
    symbol: "✧",
    title: "A mensagem desconhecida",
    text: "São quase meia-noite quando seu celular vibra. Uma mensagem de um número desconhecido aparece na tela: “Se quiser descobrir a verdade, esteja na entrada da Floresta das Sombras antes do amanhecer.” Você não conhece o remetente, mas reconhece o nome da floresta. Há anos, pessoas contam histórias estranhas sobre aquele lugar. O que você vai fazer?",
    hint: "Sua aventura começa agora.",
    journal: "Sua história ainda não começou. Prepare-se para descobrir o desconhecido.",
    choices: [
      { label: "Ir até a floresta", description: "Enfrentar o desconhecido.", next: "forest" },
      { label: "Investigar a mensagem", description: "Buscar pistas antes de partir.", next: "research" }
    ]
  },

  forest: {
    chapter: 2,
    tag: "A FLORESTA",
    symbol: "🌙",
    title: "Entre as árvores",
    text: "Você chega à entrada da floresta pouco antes do amanhecer. O ar está frio e uma trilha iluminada por pequenas luzes parece convidar você a entrar. Perto de uma árvore, encontra uma mochila antiga. Ao longe, ouve o som de água corrente. Você precisa decidir por onde começar.",
    hint: "Você escolheu seguir diretamente para a floresta.",
    journal: "Você chegou à Floresta das Sombras. Uma trilha iluminada e uma mochila abandonada podem guardar pistas.",
    choices: [
      { label: "Seguir as luzes da trilha", description: "Descobrir aonde o caminho leva.", next: "lights" },
      { label: "Examinar a mochila", description: "Procurar algo que explique o mistério.", next: "backpack" }
    ]
  },

  research: {
    chapter: 2,
    tag: "A INVESTIGAÇÃO",
    symbol: "⌕",
    title: "Pistas na madrugada",
    text: "Antes de sair, você pesquisa o nome da floresta. Entre relatos antigos, encontra uma notícia sobre uma exploradora desaparecida que procurava um observatório escondido. A notícia menciona um símbolo em forma de estrela e um mapa incompleto. Você guarda a informação e decide ir até a floresta.",
    hint: "A investigação revelou uma pista importante.",
    journal: "Uma exploradora desaparecida procurava um observatório. O símbolo de estrela pode ajudar você.",
    choices: [
      { label: "Procurar o observatório", description: "Usar as informações encontradas.", next: "observatory" },
      { label: "Seguir o rio mencionado na notícia", description: "Investigar outra possível pista.", next: "river" }
    ]
  },

  lights: {
    chapter: 3,
    tag: "A TRILHA",
    symbol: "✦",
    title: "O caminho brilhante",
    text: "As luzes conduzem você até uma clareira. No centro há uma pedra com o mesmo símbolo de estrela que apareceu na mensagem. Quando você toca a pedra, um compartimento se abre e revela um pequeno mapa. Nele, há uma marca apontando para uma construção escondida nas montanhas.",
    hint: "Você encontrou um mapa misterioso.",
    journal: "O mapa aponta para uma construção nas montanhas. A estrela parece ser a chave do enigma.",
    choices: [
      { label: "Subir em direção às montanhas", description: "Seguir a indicação do mapa.", next: "observatory" },
      { label: "Voltar e procurar mais pistas", description: "Explorar a clareira com calma.", next: "backpack" }
    ]
  },

  backpack: {
    chapter: 3,
    tag: "O OBJETO PERDIDO",
    symbol: "🎒",
    title: "O diário da exploradora",
    text: "Dentro da mochila, você encontra um diário protegido por uma capa impermeável. As páginas contam a história de alguém que descobriu um observatório antigo. A última anotação diz: “A resposta está onde o céu encontra a terra.” Um desenho mostra montanhas e um rio que se encontram perto de uma ponte.",
    hint: "O diário revelou uma nova direção.",
    journal: "O diário menciona uma ponte próxima ao rio e às montanhas. A exploradora esteve aqui antes de você.",
    choices: [
      { label: "Seguir para a ponte", description: "Investigar o encontro do rio com as montanhas.", next: "river" },
      { label: "Ir direto às montanhas", description: "Procurar o observatório.", next: "observatory" }
    ]
  },

  river: {
    chapter: 4,
    tag: "O RIO ESCONDIDO",
    symbol: "≈",
    title: "A ponte de pedra",
    text: "O som da água leva você até uma ponte antiga. No outro lado, há uma placa com o símbolo de estrela e uma frase: “A verdade não pertence a quem a encontra, mas a quem escolhe compartilhá-la.” Você percebe que o mistério talvez seja maior do que uma simples descoberta. Ao lado da ponte, uma escadaria sobe pela montanha.",
    hint: "Você encontrou uma mensagem deixada para alguém.",
    journal: "A placa sugere que a descoberta deve ser compartilhada. A escadaria leva à região das montanhas.",
    choices: [
      { label: "Subir a escadaria", description: "Descobrir o que existe no alto.", next: "observatory" },
      { label: "Registrar a mensagem e voltar", description: "Preservar a pista antes de continuar.", next: "archive" }
    ]
  },

  observatory: {
    chapter: 4,
    tag: "O OBSERVATÓRIO",
    symbol: "🔭",
    title: "A porta esquecida",
    text: "No alto da montanha, você encontra uma construção de pedra coberta por plantas. A porta possui uma abertura em forma de estrela. O mapa e o símbolo parecem combinar perfeitamente. Ao entrar, encontra uma sala com livros, mapas antigos e um pequeno dispositivo luminoso. Uma inscrição na parede pergunta: “O que torna uma descoberta verdadeiramente valiosa?”",
    hint: "Você chegou ao coração do mistério.",
    journal: "O observatório guarda documentos e mapas antigos. A pergunta na parede parece ser a última chave.",
    choices: [
      { label: "Abrir os registros e compartilhar a descoberta", description: "Permitir que outras pessoas conheçam a história.", next: "goodEnding" },
      { label: "Guardar o mapa e continuar investigando", description: "Procurar entender tudo antes de revelar.", next: "secretEnding" }
    ]
  },

  archive: {
    chapter: 5,
    tag: "OS REGISTROS",
    symbol: "📜",
    title: "Memórias preservadas",
    text: "Você registra a mensagem e encontra, perto da ponte, uma pequena caixa de metal. Dentro há uma carta da exploradora. Ela explica que deixou pistas para que alguém pudesse localizar o observatório e preservar seus documentos. A carta termina com uma coordenada e uma palavra: “Esperança”.",
    hint: "Você descobriu por que as pistas foram deixadas.",
    journal: "A exploradora queria que seus documentos fossem preservados. A carta confirma a importância do observatório.",
    choices: [
      { label: "Levar a carta ao observatório", description: "Concluir a investigação.", next: "observatory" },
      { label: "Voltar para casa e organizar as descobertas", description: "Preparar um relato da aventura.", next: "homeEnding" }
    ]
  },

  goodEnding: {
    chapter: 6,
    tag: "FINAL • A DESCOBERTA",
    symbol: "✧",
    title: "A luz compartilhada",
    text: "Você organiza os documentos e compartilha a descoberta com pesquisadores que podem ajudar a preservar o observatório. Com o tempo, a história da exploradora é finalmente conhecida, e o lugar se torna um espaço de aprendizado. Você entende que o verdadeiro tesouro não estava escondido na montanha: era o conhecimento que poderia ser transmitido a outras pessoas. Sua aventura termina com uma descoberta que pertence a todos.",
    hint: "Final alcançado: A luz compartilhada.",
    journal: "Você revelou o mistério e ajudou a preservar a história do observatório.",
    ending: true
  },

  secretEnding: {
    chapter: 6,
    tag: "FINAL • O SEGREDO",
    symbol: "🌌",
    title: "O guardião do horizonte",
    text: "Você decide continuar pesquisando antes de revelar os documentos. Cada página abre novas perguntas, e o observatório se transforma no centro de uma longa investigação. Você assume a responsabilidade de proteger aquele conhecimento enquanto procura compreender a história por completo. Talvez outras pessoas descubram o lugar um dia, mas, por enquanto, o segredo continua com você.",
    hint: "Final alcançado: O guardião do horizonte.",
    journal: "Você escolheu proteger o segredo e continuar investigando o observatório.",
    ending: true
  },

  homeEnding: {
    chapter: 6,
    tag: "FINAL • A MEMÓRIA",
    symbol: "📖",
    title: "Uma história para contar",
    text: "Você volta para casa levando as anotações e a carta da exploradora. Organiza cada pista e escreve um relato completo da jornada. Mesmo sem desvendar todos os detalhes, você consegue preservar as informações para quem quiser continuar a investigação. Ao olhar pela janela, percebe que a aventura mudou sua maneira de enxergar o mundo. Algumas respostas aparecem; outras se transformam em novas perguntas.",
    hint: "Final alcançado: Uma história para contar.",
    journal: "Você voltou para casa com pistas preservadas e uma história que poderá inspirar outras pessoas.",
    ending: true
  }
};

const initialScene = "start";
let currentScene = initialScene;
let visitedScenes = new Set([initialScene]);
let journeySteps = 0;

const chapterTag = document.getElementById("chapter-tag");
const chapterNumber = document.getElementById("chapter-number");
const storySymbol = document.getElementById("story-symbol");
const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");
const storyHint = document.getElementById("story-hint");
const journalText = document.getElementById("journal-text");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const restartButton = document.getElementById("restart-button");

function renderScene(sceneId) {
  const scene = scenes[sceneId];

  if (!scene) {
    storyTitle.textContent = "Ops! Caminho não encontrado";
    storyText.textContent = "Não conseguimos encontrar esta parte da história. Reinicie a aventura para começar novamente.";
    choicesContainer.replaceChildren();
    return;
  }

  currentScene = sceneId;
  visitedScenes.add(sceneId);

  chapterTag.textContent = scene.tag;
  chapterNumber.textContent = `CAPÍTULO ${String(scene.chapter).padStart(2, "0")}`;
  storySymbol.textContent = scene.symbol;
  storyTitle.textContent = scene.title;
  storyText.textContent = scene.text;
  storyHint.textContent = scene.hint;
  journalText.textContent = scene.journal;

  choicesContainer.replaceChildren();

  if (scene.ending) {
    const endingNote = document.createElement("p");
    endingNote.className = "choice-copy";
    endingNote.innerHTML = "<strong>Fim desta jornada.</strong><small>Você pode reiniciar para descobrir outros caminhos.</small>";
    choicesContainer.appendChild(endingNote);
  } else {
    scene.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";

      const letter = document.createElement("span");
      letter.className = "choice-letter";
      letter.textContent = String.fromCharCode(65 + index);

      const copy = document.createElement("span");
      copy.className = "choice-copy";

      const title = document.createElement("strong");
      title.textContent = choice.label;

      const description = document.createElement("small");
      description.textContent = choice.description;

      const arrow = document.createElement("span");
      arrow.className = "choice-arrow";
      arrow.textContent = "↗";

      copy.append(title, description);
      button.append(letter, copy, arrow);

      button.addEventListener("click", () => {
        journeySteps += 1;
        renderScene(choice.next);
      });

      choicesContainer.appendChild(button);
    });
  }

  updateProgress(scene);
}

function updateProgress(scene) {
  const maxChapter = 6;
  const progress = scene.ending
    ? 100
    : Math.min(95, Math.round(((scene.chapter - 1) / (maxChapter - 1)) * 100));

  progressText.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;
}

function restartAdventure() {
  currentScene = initialScene;
  visitedScenes = new Set([initialScene]);
  journeySteps = 0;
  renderScene(initialScene);
  storyHint.textContent = "Uma nova aventura espera por você.";
}

restartButton.addEventListener("click", restartAdventure);

renderScene(initialScene);
