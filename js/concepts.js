document.addEventListener("DOMContentLoaded", function() {

  const characters = [
    {
      name: "Bingo",
      image: "img2/bingo-bongo.png",
      description: `<strong>Bingo e Bongo:</strong> <br>
Temas: O cientista Ranzinza,o preço da fama <br>
<strong>ATO I - O menino entre duas Luzes</strong><br>
Bingo é um palhaço que passou sua infância se mudando de vilarejo para vilarejo, filho de uma artista altruísta e sonhadora que acreditava no riso como cura e de um palhaço cientista que tentava medi-lo como fórmula para um segmento específico da corporação do espetáculo.
Quando um conflito explode entre Mímicos e Mágicos, seu pai fica para trás e Bingo e sua mãe precisam fugir, sendo nesse tempo sombrio que Bingo encontra seu amigo Bongo, um ganso extremamente inteligente que agora segue caminho com a família.<br><br>
<strong>ATO II - A brincadeira e a responsabilidade</strong><br>
Bingo e Bongo precisam seguir seu caminho, começando com pequenos shows de rua Bingo segue um caminho de cientista, sempre tentando inovar seus truques e apresentações. Ele sempre foi brincalhão e ingênuo até encontrar Luara a cartomante onde começam uma amizade mutual, ela serve de escada para ele, ensina valores que ele nunca tinha visto antes e a seriedade necessária para alcançar coisas grandiosas. <br><br>
<strong>ATO III - A Chama que nunca apaga</strong><br>
Bingo junto a Luara misturando magia e ciência criam Pyro, uma vela humanoide infinita com poderes piromaníacos Bingo, Bongo e Pyro seguem o mundo a fora com suas apresentações se tornando mundialmente famoso. O palhaço conhece todos os cantos do mundo fazendo amizade com diferentes figuras.<br><br>
<strong>ATO IV - O Preço da Fama</strong><br>
Porém ele descobre nessa jornada a verdadeira face da Fama, suas apresentações não são mais de coração, são ensaiadas, controladas e as risadas não parecem mais sinceras.<br><br>

<strong>ATO V - RisaDínamo</strong><br>
Ele desiste de sua fama controlada pela corporação e tenta um último truque, ele se junta com dois amigos (Doc Zero e Kalman) eles trabalham e em conjunto criam a máquina Risadinamo, que converte as emoções em energia pura. Eles levam a máquina até uma feira de inovações, porém a máquina é sabotada e um incêndio generalizado começa criando um evento quê ficou famoso e mudou a vida dos ali presentes.<br>
O incêndio vira história, o sonho vira culpa.<br><br>
<strong>ATO VI - O Palhaço Ranzinza (Atual)</strong><br>
Após esse Evento Bingo fica ranzinza e angustiado, outros apresentadores se juntam ao grupo de Bingo e Bongo e Pyro, chamado de Trupe da Baderna, e Bingo vive seus dias a sombra da sua antiga fama em um pequeno circo que roda o mundo.
`
    },
    {
      name: "Luara",
      image: "img/personagem2.jpg",
      description: `Luara vem de uma linhagem de profetas perseguidos.
      
      Texto grande aqui também.
      Pode ser praticamente infinito.`
    }
  ];

  let currentIndex = 0;

  const imageElement = document.getElementById("character-image");
  const nameElement = document.getElementById("character-name");
  const descriptionElement = document.getElementById("character-description");

  function updateCharacter(index) {
    imageElement.src = characters[index].image;
    nameElement.textContent = characters[index].name;
    descriptionElement.innerHTML = characters[index].description;



    // volta o scroll para o topo ao trocar personagem
    descriptionElement.parentElement.scrollTop = 0;
  }

  document.querySelector(".arrow.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter(currentIndex);
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter(currentIndex);
  });

  // Inicializa primeiro personagem
  updateCharacter(currentIndex);

});