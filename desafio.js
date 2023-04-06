
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

let arrayComputador = [computador[0].texto, computador[1].texto] 
let arrayComputadorValor = [computador[0].valor, computador[1].valor]
let nmrComputador = 0
for(percorre of arrayComputadorValor){
   nmrComputador += percorre
}

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
   alert(`As cartas do usuário eram ${arrayUsuario}. A pontuação foi ${nmrUsuario}`)
   alert(`As cartas do computador eram ${arrayComputador}. A pontuação foi ${nmrComputador}`)
   if ((nmrComputador <= 21 && nmrComputador > nmrUsuario) || nmrUsuario > 21) {
      alert("Computador ganhou")
   } else if ((nmrUsuario <= 21 && nmrUsuario > nmrComputador) || nmrComputador > 21) {
      alert("O usuário ganhou")
   } else if (nmrComputador === nmrUsuario) {
      alert("Empate")
   } 
} else {
   alert("Fim do jogo!")
}


