
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

// const carta1 = comprarCarta()  // Carta atribuída ao usuário
// const carta2 = comprarCarta()  // Carta atribuída ao usuário
// const carta3 = comprarCarta()  // Carta atribuída ao computador
// const carta4 = comprarCarta()  // Carta atribuída ao computador

// const pontosUsuario = carta1.valor + carta2.valor
// const pontosPC = carta3.valor + carta4.valor

// console.log(pontosUsuario)
// console.log(pontosPC)

// if(pergunta === true){
//   pontosUsuario += carta1.valor
//   pontosPC += carta3.valor

//   console.log() 
// } else{
//   console.log("")
// }

const usuario = [(comprarCarta()), (comprarCarta())]
const computador = [(comprarCarta()), (comprarCarta())]


console.log("Bem vindo ao jogo de BlackJack!")
const pergunta = confirm("Você deseja iniciar uma rodada?")

// usuario.push(comprarCarta())
// console.log(usuario)

if (pergunta === true) {
  const resultadoComputador = computador[0].valor + computador[1].valor
  const resultadoUsuario = usuario[0].valor + usuario[1].valor
  const textoJogador = usuario[0].texto + " " + usuario[1].texto
  const textoComputador = computador[0].texto + " " + computador[1].texto
  console.log(`As cartas do usuário eram ${textoJogador}. A pontuação foi ${resultadoUsuario}`)
  console.log(`As cartas do computador eram ${textoComputador}. A pontuação foi ${resultadoComputador}`)
  if(resultadoComputador <=21 && resultadoComputador>resultadoUsuario){
    console.log("Computador ganhou")
  } else if(resultadoUsuario <=21 && resultadoUsuario>resultadoComputador){
    console.log("O usuário ganhou")
  } else if(resultadoComputador === resultadoUsuario){
    console.log("Empate")
  }
} else {
  console.log("Fim do jogo!")
}















