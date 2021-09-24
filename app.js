var numeroSecreto = parseInt(Math.random() * 11);
var totalTentativas = 3;
var numTentativas = 0;
var elementoResultado = document.querySelector("#resultado");
var elementoTentativa = document.querySelector("#tentativa");

function Chutar() {
  var input = document.querySelector("#valor");
  var chute = parseInt(input.value) ;

  if(numeroSecreto === chute){
    elementoResultado.innerHTML = "Você acertou!"
    elementoTentativa.innerHTML = "Parabéns!!";
  } else if (chute < 0 || chute > 10){
    elementoResultado.innerHTML = "Você deve digitar um valor entre 0 e 10"
  }else{
    elementoResultado.innerHTML = "Você errou :(" 
    numTentativas++;
    if(numTentativas >= 3){
      elementoResultado.innerHTML = "Você errou :(" 
      elementoTentativa.innerHTML = "Suas tentativas acabaram";
      return;
    }
    elementoTentativa.innerHTML = "Você tem mais " + (totalTentativas -numTentativas) + " tentativa(s)";
  }
}

function Novamente(){
  numTentativas = 0;
  numeroSecreto = parseInt(Math.random() * 11);
  elementoResultado.innerHTML = "Nova rodada!";
  elementoTentativa.innerHTML = "";
}