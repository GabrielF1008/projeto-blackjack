/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


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

const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

let usuario = [(comprarCarta()), (comprarCarta())]
let computador = [(comprarCarta()), (comprarCarta())]
let confereAs = true

while (confereAs === true) {
   if (usuario[0].valor === 11 && usuario[1].valor === 11 || computador[0].valor === 11 && computador[1].valor === 11) {
      usuario = []
      computador = []
      usuario = [(comprarCarta()), (comprarCarta())]
      computador = [(comprarCarta()), (comprarCarta())]
   } else {
      confereAs = false
   }
}

let arrayUsuario = [usuario[0].texto, usuario[1].texto]
let arrayUsuarioValor = [usuario[0].valor, usuario[1].valor]
let nmrUsuario = 0
for(percorre of arrayUsuarioValor){
   nmrUsuario += percorre
}
// console.log(nmrUsuario)

let arrayComputador = [computador[0].texto, computador[1].texto] 
let arrayComputadorValor = [computador[0].valor, computador[1].valor]
let nmrComputador = 0
for(percorre of arrayComputadorValor){
   nmrComputador += percorre
}
// console.log(nmrComputador)


// console.log(arrayUsuario)

const perguntaRodada = confirm("Você deseja iniciar uma rodada?")

console.log("Bem vindo ao jogo de BlackJack!")

let condicao = true
let condicaoComputador = false

while(condicao === true && nmrUsuario < 21){
   if(confirm(" Suas cartas são " + arrayUsuario + "\n As cartas do computador são " + computador[0].texto + "\n Você deseja comprar mais cartas?")){
      novaCarta = comprarCarta()
   usuario.push(novaCarta)
   nmrUsuario += novaCarta.valor
   arrayUsuario.push(novaCarta.texto)
   // console.log(nmrUsuario)
   } else {
      condicao = false
      condicaoComputador = true
   }
}

while(condicaoComputador){
   if(nmrComputador < 21 && nmrComputador < nmrUsuario){
      novaCarta = comprarCarta()
      computador.push(novaCarta)
      nmrComputador += novaCarta.valor
      arrayComputador.push(novaCarta.texto)
   } else{
      condicaoComputador = false
   }
}

if (perguntaRodada === true) {
   console.log(`As cartas do usuário eram ${arrayUsuario}. A pontuação foi ${nmrUsuario}`)
   console.log(`As cartas do computador eram ${arrayComputador}. A pontuação foi ${nmrComputador}`)
   if (nmrComputador <= 21 && nmrComputador > nmrUsuario) {
      console.log("Computador ganhou")
   } else if (nmrUsuario <= 21 && nmrUsuario > nmrComputador) {
      console.log("O usuário ganhou")
   } else if (nmrComputador === nmrUsuario) {
      console.log("Empate")
   } else if(nmrComputador > 21){
      console.log("O usuário ganhou")
   } else if(nmrUsuario > 21){
      console.log("O computador ganhou")
   }
} else {
   console.log("Fim do jogo!")
}



