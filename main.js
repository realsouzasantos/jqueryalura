var tempoInicial = $("#tempo-digitação").text();
var campo = $(".campo-digitação");

$(document).ready(function(){
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text(); //Linkou com a classe do HTML
  var numPalavras = frase.split(" ").length; //A função Slipt ajuda a contar as palavras através do espaço que tem entre elas. O legth é o comprimento, ou seja, a quantidade de palavras no total.
  var tamanhoFrase = $("#tamanho-frase"); //Cria a variável tamanhoFrase, do span que envolve o número de palavras.
  tamanhoFrase.text(numPalavras); //Preenche o número envolvido no span com a quantidade contada de palavras.

};
function inicializaContadores() {

  campo.on("input",function(){
      var conteúdo = campo.val();

      var qtdPalavras = conteúdo.split(/\S+/).length - 1;
      $("#contador-palavras").text(qtdPalavras);

      var qtdCaracteres = conteúdo.length;
      $("#contador-caracteres").text(qtdCaracteres);

  });
};

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitação").text();
  campo.one("focus", function(){
    var cronometroID = setInterval(function(){
        tempoRestante--;
        console.log(tempoRestante);
        $("#tempo-digitação").text(tempoRestante);
        if (tempoRestante < 1) {
            clearInterval(cronometroID); //Trava o cronômetro no 0
            finalizaJogo();
        }
    },1000);
  });
}
function finalizaJogo() {
  campo.attr("disabled",true); //Trava o campo de texto, quando o cronômetro chega a zero
  campo.addClass("campo-desativado");
  inserePlacar();
}
function inicializaMarcadores() {
  var frase = $(".frase").text();
  campo.on("input", function(){
    var digitado = campo.val();
    var comparavel = frase.substr(0,digitado.length);
    console.log("Digitado"+ digitado);
    console.log("Frase C." + comparavel);
    if (digitado == comparavel) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  })

}
function reiniciaJogo() {
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitação").text(tempoInicial);
    inicializaCronometro();
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}
