// Dados das facções e personagens
const factions = {
  palhaco: [
    { icon: './Img/bingo_icone.png', name: 'Bingo', desc: 'É um palhaço humilde e cientista que trabalha para trazer a graça para seu público com seu Ganso companheiro. Bingo vê a arte e a risada como resistência em um mundo dominado pela Corporação do Espetáculo, Bingo representa o último reduto da alegria genuína, ele é o lembrete de que rir pode ser um ato político, uma forma de desobediência e, sobretudo, de amor. Seu grupo chamado Trupe da Baderna escolhe a vida alegre de um circo que viaja o mundo.' },
    { icon: './Img/bongo_icone.png', name: 'Bongo', desc: 'Bongo é o parceiro de Bingo, o mestre das trapalhadas, um ganso super alegre que foi resgatado de um circo abusivo e hoje vive com a Trupe da Baderna fazendo as maiores bagunças e confusões.' },
    { icon: './Img/Emily_icone.png', name: 'Emilia', desc: 'É uma boneca de pano que nasceu da Magia de um Mágico, foi explorada por um vendedor de bonecas a fazer espetaculos sem receber lucro nenhum, ao fugir da loja de bonecas ela se encontra com Doll, e juntas possuem o objetivo de conhecer e explorar o mundo.'},
    { icon: './Img/doll_icone.png', name: 'Doll', desc: 'É uma boneca articulada contorcionista que fugiu do seu trabalho como telefonista de guerra e passou a viver as margens da sociedade sendo procurada pela policia mágica por suas peripécias. Nos becos e ruas elas se encontra com a boneca de pano Emilia e juntas possuem o objetivo de encontrar um Lugar Maravilhoso, um lugar que pode ser chamado de casa.' },
    { icon: './Img/Pyro_icone.png', name: 'Pyro', desc: 'É uma vela antropomofica super amigavel, criado através da fusão entre Magia e Ciência se tornando um ser consciente. Sua manipulação de fogo causa em si proprio muito desgaste, sempre que ele utiliza muito sua Piromancia o calor faz com que ele Derreta sendo necessário sempre repor a cera de seu corpo. ' },
    { icon: './Img/juggler_icone.png', name: 'Juggler', desc: 'É um automata comum, um robô criado para entreter o público com danças, porém ele decide ir contra sua própria programação e começa a improvisar passos que não foram programados. Seus engenheiros pedem para que Bingo conserta-lo ou ele sera descartado, Bingo então decide fazer alguns ajustes em Juggler se tornando uma das grandes atrações da Trupe da Banderna.' }
  ],
  mimicos: [
    { icon: './Img/grogg_icone.png', name: 'Grogg', desc: 'É o sapo antropomorfico e o mímico mais astuto da cidade, ele possuia uma equipe muito famosa no começo de sua carreira, abandonando os holofotes ele vive uma vida de fanfarrão as margens da sociedade enganando os outros com seus truques por alguns trocados. Ele encontra o pequeno Pedro e junto vivem essa vida de peripécias.' },
    { icon: './Img/pedro_icone.png', name: 'Pedro', desc: 'É um mímico que expressa seus sentimentos com silêncio e gestos, ele só se comunica atraves de seu Fantoche Sapo que ele usa para imitar seu amigo Grogg, eles estão sempre no centro das confusões e gostam de brincar de espiões onde passam informações da Coorporação do Espetáculo para a Trupe da Baderna.' },
    { icon: '🤐', name: 'Silêncio', desc: 'Silêncio é enigmático e misterioso.' },
    { icon: '👤', name: 'Sombra', desc: 'Sombra aparece quando menos se espera.' },
    { icon: '🌀', name: 'Espiral', desc: 'Espiral confunde e hipnotiza com movimentos.' },
    { icon: '👀', name: 'Olho', desc: 'Olho observa todos sem ser notado.' }
  ],
  magicos: [
    { icon: '🪄', name: 'Mandrake', desc: 'Mandrake é um mágico ambicioso e astuto.' },
    { icon: '🧙‍♂️', name: 'Hypno', desc: 'Hypno hipnotiza com seu trem luxuoso.' },
    { icon: '🔮', name: 'Lady Fortune', desc: 'Lady Fortune manipula o destino dos outros.' },
    { icon: '🦉', name: 'Corvus', desc: 'Corvus é o guardião das magias proibidas.' },
    { icon: '🔥', name: 'Pyro', desc: 'Pyro controla chamas com maestria.' },
    { icon: '💎', name: 'Gemma', desc: 'Gemma cria ilusões com pedras preciosas.' }
  ]
};

const factionNames = Object.keys(factions);
let currentFactionIndex = 0;

const factionDisplay = document.getElementById('faction-display');
const charactersDiv = document.getElementById('characters');
const descriptionDiv = document.getElementById('character-description');

function showCharacters(faction) {
  charactersDiv.innerHTML = '';
  factions[faction].forEach(char => {
    const circle = document.createElement('div');
    circle.classList.add('character-circle');
   if (char.icon.endsWith('.png') || char.icon.endsWith('.jpg') || char.icon.endsWith('.jpeg') || char.icon.endsWith('.svg')) {
  const img = document.createElement('img');
  img.src = char.icon;
  img.alt = char.name;
  img.style.width = '70px';
  img.style.height = '70px';
  img.style.objectFit = 'cover';
  circle.appendChild(img);
} else {
  circle.textContent = char.icon; // emoji ou texto
}
    circle.title = char.name;
    circle.addEventListener('click', () => {
      descriptionDiv.textContent = `${char.name}: ${char.desc}`;
    });
    charactersDiv.appendChild(circle);
  });
  descriptionDiv.textContent = 'Selecione um personagem para ver a descrição.';
}

// Inicializa com a primeira facção
showCharacters(factionNames[currentFactionIndex]);

// Navegação do carrossel
document.getElementById('arrow-left').addEventListener('click', () => {
  currentFactionIndex = (currentFactionIndex - 1 + factionNames.length) % factionNames.length;
  factionDisplay.textContent = factionNames[currentFactionIndex].charAt(0).toUpperCase() + factionNames[currentFactionIndex].slice(1);
  showCharacters(factionNames[currentFactionIndex]);
});

document.getElementById('arrow-right').addEventListener('click', () => {
  currentFactionIndex = (currentFactionIndex + 1) % factionNames.length;
  factionDisplay.textContent = factionNames[currentFactionIndex].charAt(0).toUpperCase() + factionNames[currentFactionIndex].slice(1);
  showCharacters(factionNames[currentFactionIndex]);
});
