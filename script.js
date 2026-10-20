
const story = {
  inicio: {
    etapa: 1,
    simbolo: "☾",
    titulo: "Uma mensagem misteriosa",
    texto: "Você encontra uma carta antiga sobre uma cidade escondida além das montanhas. Dizem que lá existe um segredo capaz de mudar o futuro. Ao anoitecer, duas trilhas aparecem diante de você: uma iluminada por cristais azuis e outra que desaparece dentro de uma floresta.",
    escolhas: [
      {
        texto: "Seguir os cristais azuis",
        detalhe: "Explorar uma trilha misteriosa.",
        destino: "cristais"
      },
      {
        texto: "Entrar na floresta",
        detalhe: "Descobrir o que se esconde na escuridão.",
        destino: "floresta"
      }
    ]
  },

  cristais: {
    etapa: 2,
    simbolo: "✧",
    titulo: "O caminho luminoso",
    texto: "Os cristais brilham conforme você avança. Depois de algum tempo, encontra uma porta de pedra com símbolos antigos. Ao lado dela, uma pequena chave prateada repousa sobre um pedestal. Mais adiante, você ouve o som de água vindo de uma passagem estreita.",
    escolhas: [
      {
        texto: "Pegar a chave prateada",
        detalhe: "Descobrir o que a chave pode abrir.",
        destino: "chave"
      },
      {
        texto: "Seguir o som da água",
        detalhe: "Investigar a passagem secreta.",
        destino: "rio"
      }
    ]
  },

  floresta: {
    etapa: 2,
    simbolo: "♧",
    titulo: "Os segredos da floresta",
    texto: "Entre as árvores, pequenas luzes dançam no ar. Você encontra uma raposa de olhos brilhantes que parece compreender suas palavras. Ela aponta para duas direções: uma torre abandonada e um lago que reflete um céu cheio de estrelas.",
    escolhas: [
      {
        texto: "Visitar a torre",
        detalhe: "Investigar as ruínas antigas.",
        destino: "torre"
      },
      {
        texto: "Ir até o lago",
        detalhe: "Descobrir o mistério das águas.",
        destino: "lago"
      }
    ]
  },

  chave: {
    etapa: 3,
    simbolo: "⚿",
    titulo: "A porta do tempo",
    texto: "A chave se encaixa perfeitamente na porta de pedra. Ao girá-la, um mecanismo desperta e revela uma biblioteca subterrânea. No centro, um livro flutua sobre um pedestal, iluminado por uma luz dourada. Suas páginas parecem aguardar alguém.",
    escolhas: [
      {
        texto: "Abrir o livro dourado",
        detalhe: "Conhecer o segredo da cidade.",
        destino: "livro"
      },
      {
        texto: "Examinar os símbolos",
        detalhe: "Decifrar a mensagem escondida.",
        destino: "simbolos"
      }
    ]
  },

  rio: {
    etapa: 3,
    simbolo: "≈",
    titulo: "O rio escondido",
    texto: "A passagem leva a um rio subterrâneo. Uma pequena embarcação está presa à margem e uma ponte de pedra cruza a correnteza. Do outro lado, uma luz dourada ilumina uma construção antiga.",
    escolhas: [
      {
        texto: "Atravessar a ponte",
        detalhe: "Seguir em direção à luz.",
        destino: "ponte"
      },
      {
        texto: "Usar a embarcação",
        detalhe: "Explorar o rio desconhecido.",
        destino: "barco"
      }
    ]
  },

  torre: {
    etapa: 3,
    simbolo: "♜",
    titulo: "A torre esquecida",
    texto: "No alto da torre, você encontra um mapa celeste e um diário de um antigo explorador. O diário fala de um portal que aparece somente quando as estrelas formam uma constelação especial. Uma escada leva ao observatório e outra desce até uma sala trancada.",
    escolhas: [
      {
        texto: "Subir ao observatório",
        detalhe: "Procurar a constelação.",
        destino: "estrelas"
      },
      {
        texto: "Explorar a sala trancada",
        detalhe: "Investigar o diário do explorador.",
        destino: "diario"
      }
    ]
  },

  lago: {
    etapa: 3,
    simbolo: "◉",
    titulo: "O espelho das estrelas",
    texto: "O lago reflete estrelas que não existem no céu verdadeiro. Ao tocar a água, você vê uma cidade brilhante e ouve uma voz dizendo que há duas maneiras de encontrá-la: seguir a constelação refletida ou procurar uma passagem entre as pedras.",
    escolhas: [
      {
        texto: "Seguir as estrelas refletidas",
        detalhe: "Confiar na visão do lago.",
        destino: "estrelas"
      },
      {
        texto: "Procurar entre as pedras",
        detalhe: "Encontrar uma entrada escondida.",
        destino: "ponte"
      }
    ]
  },

  livro: {
    etapa: 4,
    simbolo: "✦",
    titulo: "O conhecimento perdido",
    texto: "O livro revela que a cidade foi construída para proteger uma fonte de energia capaz de iluminar o mundo. Mas ela só pode ser encontrada por quem usa o conhecimento com responsabilidade. Uma última página descreve a localização de um portal.",
    escolhas: [
      {
        texto: "Abrir o portal",
        detalhe: "Descobrir a cidade escondida.",
        destino: "final-bom"
      },
      {
        texto: "Guardar o conhecimento",
        detalhe: "Proteger o segredo para o futuro.",
        destino: "final-sabio"
      }
    ]
  },

  simbolos: {
    etapa: 4,
    simbolo: "⌘",
    titulo: "A mensagem decifrada",
    texto: "Os símbolos formam uma frase: 'A verdadeira passagem se abre para quem compreende o valor de cada descoberta'. Ao terminar a leitura, as paredes se iluminam e uma porta aparece no fundo da biblioteca.",
    escolhas: [
      {
        texto: "Entrar pela porta",
        detalhe: "Continuar a exploração.",
        destino: "final-bom"
      },
      {
        texto: "Registrar os símbolos",
        detalhe: "Levar a descoberta para casa.",
        destino: "final-sabio"
      }
    ]
  },

  ponte: {
    etapa: 4,
    simbolo: "◇",
    titulo: "A passagem dourada",
    texto: "A ponte leva você a um salão escavado na montanha. No centro existe um portal dourado e, ao lado, um painel com inscrições antigas. Você percebe que pode atravessar imediatamente ou estudar as inscrições antes de prosseguir.",
    escolhas: [
      {
        texto: "Atravessar o portal",
        detalhe: "Ver o que existe do outro lado.",
        destino: "final-bom"
      },
      {
        texto: "Estudar as inscrições",
        detalhe: "Compreender a história do lugar.",
        destino: "final-sabio"
      }
    ]
  },

  barco: {
    etapa: 4,
    simbolo: "≈",
    titulo: "Além da correnteza",
    texto: "O rio leva sua embarcação até uma caverna cheia de minerais luminosos. No fundo, você encontra uma saída para a superfície e uma passagem que segue até uma cidade subterrânea. Ambas parecem seguras, mas guardam destinos diferentes.",
    escolhas: [
      {
        texto: "Explorar a cidade",
        detalhe: "Descobrir a origem das luzes.",
        destino: "final-bom"
      },
      {
        texto: "Voltar com o mapa",
        detalhe: "Compartilhar sua descoberta.",
        destino: "final-sabio"
      }
    ]
  },

  estrelas: {
    etapa: 4,
    simbolo: "✧",
    titulo: "O portal celeste",
    texto: "As estrelas se alinham e um portal aparece diante de você. A passagem mostra uma cidade suspensa entre montanhas, iluminada por rios de luz. Uma inscrição diz que o viajante pode atravessar para explorar o lugar ou retornar para compartilhar o caminho com outras pessoas.",
    escolhas: [
      {
        texto: "Atravessar o portal",
        detalhe: "Conhecer a cidade perdida.",
        destino: "final-bom"
      },
      {
        texto: "Compartilhar o caminho",
        detalhe: "Permitir que outros descubram a cidade.",
        destino: "final-sabio"
      }
    ]
  },

  diario: {
    etapa: 4,
    simbolo: "▤",
    titulo: "O diário do explorador",
    texto: "O diário conta a história de alguém que encontrou a cidade, mas escolheu esconder sua localização até que o mundo estivesse preparado. Na última página, há um mapa completo e uma mensagem: 'Uma descoberta só ganha sentido quando sabemos como usá-la'.",
    escolhas: [
      {
        texto: "Seguir o mapa",
        detalhe: "Concluir a jornada.",
        destino: "final-bom"
      },
      {
        texto: "Preservar o diário",
        detalhe: "Proteger a história da cidade.",
        destino: "final-sabio"
      }
    ]
  },

  "final-bom": {
    etapa: 5,
    simbolo: "✦",
    titulo: "A cidade além do horizonte",
    texto: "Você atravessa o portal e finalmente encontra a cidade perdida. Torres brilhantes se erguem entre as montanhas, jardins luminosos cobrem as ruas e uma biblioteca guarda os conhecimentos de muitas gerações. Sua coragem levou você a uma descoberta extraordinária. A aventura termina, mas novas histórias começam aqui.",
    final: true
  },

  "final-sabio": {
    etapa: 5,
    simbolo: "◇",
    titulo: "O legado do explorador",
    texto: "Você decide preservar o conhecimento que encontrou. Registra cada pista, protege os mapas e prepara o caminho para que futuras gerações possam explorar a cidade com responsabilidade. Você descobre que uma grande aventura não se mede apenas pelo lugar alcançado, mas também pelo que aprendemos durante a jornada.",
    final: true
  }
};

const elements = {
  symbol: document.getElementById("story-symbol"),
  title: document.getElementById("story-title"),
  text: document.getElementById("story-text"),
  choices: document.getElementById("choices"),
  choicesLabel: document.getElementById("choices-label"),
  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),
  restart: document.getElementById("restart-button")
};

let currentScene = "inicio";
let visitedScenes = new Set();

function showScene(sceneId) {
  const scene = story[sceneId];

  if (!scene) {
    console.error("Cena não encontrada:", sceneId);
    return;
  }

  currentScene = sceneId;
  visitedScenes.add(sceneId);

  elements.symbol.textContent = scene.simbolo;
  elements.title.textContent = scene.titulo;
  elements.text.textContent = scene.texto;

  const storyContent = document.querySelector(".story-content");
  storyContent.style.animation = "none";
  void storyContent.offsetWidth;
  storyContent.style.animation = "appear 0.35s ease";

  elements.choices.replaceChildren();

  if (scene.final) {
    elements.choicesLabel.textContent = "FIM DESTA JORNADA";

    const ending = document.createElement("div");
    ending.className = "ending-message";
    ending.textContent = "✧ Você concluiu a aventura! Que tal descobrir o outro final?";
    elements.choices.appendChild(ending);
  } else {
    elements.choicesLabel.textContent = "QUAL SERÁ SUA ESCOLHA?";

    scene.escolhas.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";

      const number = document.createElement("span");
      number.className = "choice-number";
      number.textContent = String(index + 1).padStart(2, "0");

      const copy = document.createElement("span");
      copy.className = "choice-copy";

      const title = document.createElement("strong");
      title.textContent = choice.texto;

      const detail = document.createElement("small");
      detail.textContent = choice.detalhe;

      const arrow = document.createElement("span");
      arrow.className = "choice-arrow";
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");

      copy.append(title, detail);
      button.append(number, copy, arrow);

      button.addEventListener("click", () => {
        showScene(choice.destino);
      });

      elements.choices.appendChild(button);
    });
  }

  updateProgress(scene);
}

function updateProgress(scene) {
  const totalStages = 5;
  const progress = Math.min(
    100,
    Math.round((scene.etapa / totalStages) * 100)
  );

  elements.progressText.textContent = scene.final
    ? "Concluído"
    : `Etapa ${scene.etapa} de ${totalStages}`;

  elements.progressFill.style.width = `${progress}%`;
  elements.progressFill.parentElement.setAttribute(
    "aria-label",
    `Progresso: ${progress}%`
  );
}

function restartAdventure() {
  visitedScenes = new Set();
  showScene("inicio");

  document.getElementById("aventura").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

elements.restart.addEventListener("click", restartAdventure);

showScene("inicio");
