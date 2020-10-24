function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Matheus";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario,numPalavras);
  linha.find(".botao-remover").click(removeLinha);
  corpoTabela.append(linha,numPalavras);

}

function novaLinha(usuario,palavras) {
  var linha = $("<tr>"); // Cria um elemento HTML
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");
  var link = $("<a>").addClass("botao-remover").attr("href","#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);
  return linha;
}
function removeLinha() {
  event.preventDefault();
  $(this).parent().parent().remove();//Remove o pai do pai do elemento, no caso a tr toda
}
