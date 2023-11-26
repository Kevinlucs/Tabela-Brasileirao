//Colocando todos os personagem na mesma array

var clubes = [
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png",
        nome: "Palmeiras",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png",
        nome: "Botafogo",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_48x48.png",
        nome: "Bragantino",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png",
        nome: "Grêmio",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png",
        nome: "Flamengo",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png",
        nome: "Atlético-MG",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/9LkdBR4L5plovKM8eIy7nQ_48x48.png",
        nome: "Atlético-PR",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png",
        nome: "Fluminense",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_48x48.png",
        nome: "Cuiabá",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
    {
        icon: "https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png",
        nome: "São Paulo",
        pontos: 0,
        PJ: 0,
        vitoria: 0,
        empate: 0,
        derrota: 0,
    },
];

//------------------------------------------------------
//Composição da tabela

var elementoTabela = document.getElementById("tabelaDeClubes");

exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = "";
    for (var i = 0; i < clubes.length; i++) {
        var clube = clubes[i];

        var colunaClubes = `
  <tr>
      <td class="centered-cell" style="text-align: right;">
    <img src="${clube.icon}" style="width: 40px; height: 40px; float: left; margin-right: 10px;">
    ${clube.nome}
  </td>
          <td>${clube.pontos}</td>
          <td>${clube.PJ}</td>
          <td>${clube.vitoria}</td>
          <td>${clube.empate}</td>
          <td>${clube.derrota}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
  
  `;
        elementoTabela.innerHTML += colunaClubes;
    }
}

//-------------------------------------------------------
//Para mudar a posições dos clubes na tabela em tempo real

function atualizarRanking() {
    //deve ser chamada sempre que houver uma alteração da pontuação do clube
    clubes.sort(function (a, b) {
        //a e b são dois elementos da lista
        //sort ordena a lista
        return b.pontos - a.pontos;
        //se b.pontos for maior que a.pontos, significa que b deve ser colocado antes de a (etc)
    });
    for (var i = 0; i < clubes.length; i++) {
        clubes[i].posicao = i + 1; //atribui posição para cada objeto da lista
        //é como se aqui ele estivesse alterando o indice dos objetos
    }
}

//-------------------------------------------------------
// Funcionalidade dos botões

function adicionarVitoria(clube) {
    var clube = clubes[clube];
    clube.vitoria++;
    clube.pontos = clube.pontos + 3;
    clube.PJ++;

    atualizarRanking();
    exibirNaTela();
}

function adicionarEmpate(clube) {
    var clube = clubes[clube];
    clube.empate++;
    clube.pontos++;
    clube.PJ++;

    atualizarRanking();
    exibirNaTela();
}

function adicionarDerrota(clube) {
    var clube = clubes[clube];
    clube.derrota++;
    clube.PJ++;

    atualizarRanking();
    exibirNaTela();
}

//-------------------------------------------------------
//Para limpar os valores da tabela

var botaoLimpar = document.getElementById("botaoLimpar");
botaoLimpar.addEventListener("click", function () {
    for (var i = 0; i < clubes.length; i++) {
        var clube = clubes[i];
        clube.vitoria = 0;
        clube.empate = 0;
        clube.derrota = 0;
        clube.pontos = 0;
        clube.PJ = 0;
    }
    exibirNaTela();
});
