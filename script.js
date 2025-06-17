const texto = `Amor da minha vida,

Desde que você chegou, tudo em mim mudou.

A minha rotina ganhou cor, os dias ficaram mais leves e até os momentos difíceis passaram a ter sentido, porque é ao seu lado que eu encontrei o que é viver de verdade.

Cada gesto seu, cada carinho, cada mensagem, cada olhar… tudo isso me mostra todos os dias que eu encontrei alguém que não só me entende, mas me completa de um jeito que eu nem imaginava que era possível.

Você é abrigo, é lar, é riso fácil no meio do caos. É a paz que meu coração tanto procurava.

Eu fiz essa página com todo carinho do mundo, porque às vezes palavras ditas são rápidas demais. E eu queria que você tivesse um lugar pra visitar e lembrar: você é amado, desejado e admirado em cada detalhe.

Eu te amo não só pelo que você é, mas por tudo que sou quando estou com você.

Te amo nas pequenas coisas, no silêncio confortável, nos planos pra daqui a pouco e nos sonhos de um futuro inteiro que eu só quero se for ao seu lado.

Obrigada por ser meu presente, meu apoio, minha risada favorita e meu maior motivo de gratidão.

Você é o meu lugar feliz.

Com todo o amor do mundo,
De quem não vê o mundo sem você. 💖

Obrigada por existir, meu amor. 💌`;

let i = 0;
const speed = 40;

function digitar() {
  if (i < texto.length) {
    const el = document.getElementById("typed-text");

    if (texto.charAt(i) === "\n") {
      el.innerHTML += "<br>";
    } else {
      el.innerHTML += texto.charAt(i);
    }

    i++;
    setTimeout(digitar, speed);
  }
}

window.onload = digitar;
