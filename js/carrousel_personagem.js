// Dados das facções e personagens
const factions = {
  palhaços: [
    { icon: './Img/bingo_icone.png', name: 'Bingo', desc: 'É um palhaço humilde e cientista que trabalha para trazer a graça para seu público com seu Ganso companheiro. Bingo vê a arte e a risada como resistência em um mundo dominado pela Corporação do Espetáculo, Bingo representa o último reduto da alegria genuína, ele é o lembrete de que rir pode ser um ato político, uma forma de desobediência e, sobretudo, de amor. Seu grupo chamado Trupe da Baderna escolhe a vida alegre de um circo que viaja o mundo.' },
    { icon: './Img/bongo_icone.png', name: 'Bongo', desc: 'Bongo é o parceiro de Bingo, o mestre das trapalhadas, um ganso super alegre que foi resgatado de um circo abusivo e hoje vive com a Trupe da Baderna fazendo as maiores bagunças e confusões.' },
    { icon: './Img/Emily_icone.png', name: 'Emilia', desc: 'É uma boneca de pano que nasceu da Magia de um Mágico, foi explorada por um vendedor de bonecas a fazer espetaculos sem receber lucro nenhum, ao fugir da loja de bonecas ela se encontra com Doll, e juntas possuem o objetivo de conhecer e explorar o mundo.'},
    { icon: './Img/doll_icone.png', name: 'Doll', desc: 'É uma boneca articulada contorcionista que fugiu do seu trabalho como telefonista de guerra e passou a viver as margens da sociedade sendo procurada pela policia mágica por suas peripécias. Nos becos e ruas ela se encontra com a boneca de pano Emilia e juntas possuem o objetivo de encontrar um Lugar Maravilhoso, um lugar que pode ser chamado de casa.' },
    { icon: './Img/juggler_icone.png', name: 'Juggler', desc: 'É um automata comum, um robô criado para entreter o público com danças, porém ele decide ir contra sua própria programação e começa a improvisar passos que não foram programados. Seus engenheiros pedem para Bingo conserta-lo ou ele sera descartado, Bingo então decide fazer alguns ajustes em Juggler se tornando uma das grandes atrações da Trupe da Banderna.' },
    { icon: './Img/Pyro_icone.png', name: 'Pyro', desc: 'É uma vela antropomorfica super amigavel, criado através da fusão entre Magia e Ciência se tornando um ser consciente. Sua manipulação de fogo causa em si proprio muito desgaste, sempre que ele utiliza muito sua Piromancia o calor faz com que ele Derreta sendo necessário sempre repor a cera de seu corpo.'}
  ],
    mimicos: [
    { icon: './Img/grogg_icone.png', name: 'Grogg', desc: 'É o sapo antropomorfico e o mímico mais astuto da cidade, ele possuia uma equipe muito famosa no começo de sua carreira, abandonando os holofotes ele vive uma vida de fanfarrão as margens da sociedade enganando os outros com seus truques por alguns trocados. Ele encontra o pequeno Pedro e junto vivem essa vida de peripécias.' },
    { icon: './Img/Pedro_icone.png', name: 'Pedro', desc: 'É um mímico que expressa seus sentimentos com silêncio e gestos, ele só se comunica atraves de seu Fantoche Sapo que ele usa para imitar seu amigo Grogg, eles estão sempre no centro das confusões e gostam de brincar de espiões onde passam informações da Coorporação do Espetáculo para a Trupe da Baderna.' },
    { icon: './Img/Kabuki_icone.png', name: 'Kabuki', desc: 'É um palhaço/mímico enigmático e líder dos Palhaços do Oriente, além de um antigo e leal amigo de Bingo. Sua arte funde o riso ao ritual, equilibrando o exagero cômico com uma solenidade quase trágica. Cada gesto seu carrega tradição, disciplina e uma estranha melancolia. Entre os palhaços, ele representa o ponto em que o espetáculo deixa de ser brincadeira e se torna cerimônia, tornando-se uma das figuras mais inquietantes do circo.' },
    { icon: './Img/Olinda_icone.png', name: 'Olinda', desc: 'É uma mímica enigmática e a líder silenciosa do Clube das Adagas. Raramente fala — sua presença se impõe pelo gesto preciso e pelo olhar afiado. Especialista em performances perigosas com lâminas, transforma risco em linguagem e silêncio em ameaça. Irmã de Don Quixote, Olinda não tolera desrespeito nem improviso alheio: cada movimento seu é calculado, cada número é um desafio direto ao público e ao destino.' },
    { icon: './Img/DonQuixote_icone.png', name: 'Don Quixote', desc: 'É um mímico errante que caminha sobre pernas de pau. Irmão de Olinda, ele utiliza três máscaras sobrepostas, cada uma revelada em momentos distintos de suas performances. Suas performances baseiam-se em poesias encenadas enquanto possui uma cortesia excessiva, gestos elegantes e uma melancolia nobre. Don Quixote é um homem preso a códigos antigos de honra e delicadeza em um mundo que já não os reconhece, tornando suas apresentações belas, solenes e profundamente fora de época.' },
    { icon: './Img/Felix_icone.png', name: 'Felix', desc: 'Olho observa todos sem ser notado: é um vendedor ambulante de artefatos mágicos, e seus produtos prometem mais do que deveriam cumprir. Entre uma venda e outra, Félix encena pequenos espetáculos com marionetes encantadas onde nunca fica claro se ele controla as marionetes ou se são elas que o conduzem, mas uma coisa é certa: com Félix, toda negociação é também uma performance — e todo desejo tem um preço escondido.' }
  ],
  magicos: [
    { icon: './Img/Mandrake_icone.png', name: 'Mandrake', desc: 'é o rosto público da Corporação do Espetáculo — um mágico carismático, articulado e obcecado em roubar e reproduzir os planos do Palhaço Bingo. Ele acredita que toda genialidade pode ser desmontada, patenteada e reapresentada em escala industrial. Mandrake não cria: refina, copia e domina. Para o público, é um visionário; para os artistas, um predador elegante.' },
    { icon: './Img/LadyFortuna_icone.png', name: 'Lady Fortuna', desc: 'Poucos sabem que nos bastidores, quem realmente conduz a Corporação do Espetáculo é Lady Fortuna, a mente fria que transforma inspiração em controle e espetáculo em sistema. Mandrake brilha sob os refletores — enquanto Lady Fortune decide quem merece existir neles.' },
    { icon: './Img/Hypno_icone.png', name: 'Hypno', desc: 'É um mágico enigmático a serviço da Corporação do Espetáculo, especializado não em truques, mas em dominar a mente do público. Sua roupa funciona como um teste de Rorschach hipnótico: padrões em constante mutação que refletem desejos, medos e expectativas de quem o observa. Cada espectador vê algo diferente — e acredita que escolheu ver. Silencioso e calculado, Hypno não força vontades; ele as orienta suavemente, conduzindo pessoas a aceitarem ilusões confortáveis.' },
    { icon: './Img/Robson_icone.png', name: 'Robson', desc: 'É tecnicamente impecável, criativo ao extremo e, possivelmente, o melhor mágico do mundo. Suas execuções perfeitas demais para um público viciado em futilidades simples. Seu arco é o de um artista excepcional em um mundo que já não se importa com qualidade, apenas com impacto. Robson encarna a pergunta mais cruel do espetáculo: de que vale ser o melhor, se ninguém está olhando?' },
    { icon: './Img/BaraoSamedi_icone.png', name: 'Barão Samedi', desc: 'É um mágico caricato, exuberante e irresistivelmente engraçado, conhecido por transformar temas sombrios em números cheios de humor e irreverência. No entanto, por trás do riso escancarado, há algo fora de compasso: gestos que parecem ensaiados e controlados demais, pausas onde outra presença parece pensar por ele. Barão Samedi diverte, provoca e distrai — mas deixa indícios sutis de que não é ele quem conduz completamente o espetáculo.' },
    { icon: '', name: 'Gemma', desc: 'Gemma cria ilusões com pedras preciosas.' }
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
