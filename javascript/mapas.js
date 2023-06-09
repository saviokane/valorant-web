function trocarImagem() {
  var imagem = document.getElementById("ascent-click");
  if (imagem.src.match("./imagens/mapas/mapa-ascent.jpg")) {
imagem.src = "../imagens/mapas/ascent-strategy.jpg";
imagem.alt = "Imagem 2";
} else {
imagem.src = "../imagens/mapas/mapa-ascent.jpg";
imagem.alt = "Imagem 1";
}
}