function AscentTrocarImagem() {
  var imagem = document.getElementById("ascent-click");
  if (imagem.src.match("./imagens/mapas/mapa-ascent-sem-nome.jpg")) {
imagem.src = "./imagens/mapas/minimap-ascent";
imagem.alt = "Minimapa Ascent";
} else {
imagem.src = "./imagens/mapas/mapa-ascent-sem-nome.jpg";
imagem.alt = "Mapa Ascent";
}
}

function LotusTrocarImagem(){
  var imagem = document.getElementById("lotus-click");
  if(imagem.src.match("./imagens/mapas/mapa-lotus.jpg")){
    imagem.src = "./imagens/mapas/minimap-lotus.png";
    imagem.alt = "Minimapa Lotus";
  }else{
    imagem.src = "./imagens/mapas/mapa-lotus.jpg";
    imagem.alt = "Mapa Lotus";
  }
}

function BreezeTrocarImagem(){
  var imagem = document.getElementById("breeze-click");
  if(imagem.src.match("./imagens/mapas/mapa-breeze.jpg")){
    imagem.src = "./imagens/mapas/breeze-minimap.png";
    imagem.alt = "Minimapa Breeze";
  }else{
    imagem.src = "./imagens/mapas/mapa-breeze.jpg";
    imagem.alt = "Mapa Breeze";

  }
}

function FractureTrocarImagem(){
  var imagem = document.getElementById("fracture-click");
  if(imagem.src.match("./imagens/mapas/mapa-fracture.jpg")){
    imagem.src = "./imagens/mapas/minimap-fracture.png";
    imagem.alt = "Minimapa Fracture";
  }else{
    imagem.src = "./imagens/mapas/mapa-fracture.jpg";
    imagem.alt = "Mapa Fracture";
  }
}

function PearlTrocarImagem(){
  var imagem = document.getElementById("pearl-click");
  if(imagem.src.match("./imagens/mapas/mapa-pearl.jpg")){
    imagem.src = "./imagens/mapas/minimap-pearl.png";
    imagem.alt = "Minimapa Fracture";
  }else{
    imagem.src = "../imagens/mapas/mapa-pearl.jpg";
    imagem.alt = "Mapa Fracture";
  }
}

function BindTrocarImagem(){
  var imagem = document.getElementById("bind-click");
  if(imagem.src.match("./imagens/mapas/mapa-bind-sem-nome.jpg")){
    imagem.src = "./imagens/mapas/minimap-bind.png";
    imagem.alt = "Minimapa Bind";
  }else{
    imagem.src = "./imagens/mapas/mapa-bind-sem-nome.jpg";
    imagem.alt = "Mapa Bind";
  }
}

function IceboxTrocarImagem(){
  var imagem = document.getElementById("icebox-click");
  if(imagem.src.match("./imagens/mapas/mapa-icebox-sem-nome.png")){
    imagem.src = ("./imagens/mapas/minimap-icebox.png");
    imagem.alt = ("Minimapa Ice Box");
  }else{
    imagem.src = ("./imagens/mapas/mapa-icebox-sem-nome.png");
    imagem.alt = ("Mapa Ice box");
  }
}

function HavenTrocarImagem(){
  var imagem = document.getElementById("haven-click");
  if(imagem.src.match("./imagens/mapas/mapa-haven.jpg")){
    imagem.src = ("./imagens/mapas/minimap-haven.png");
    imagem.alt = ("Minimapa Haven");
  }else{
    imagem.src = ("./imagens/mapas/mapa-haven.jpg");
    imagem.alt = ("Mapa Haven");
  }
}

function SplitTrocarImagem(){
  var imagem = document.getElementById("split-click");
  if(imagem.src.match("./imagens/mapas/mapa-split-sem-nome.jpg")){
    imagem.src = ("./imagens/mapas/minimap-split.png");
    imagem.alt = ("Minimapa Split");
  }else{
    imagem.src = ("./imagens/mapas/mapa-split-sem-nome.jpg");
    imagem.alt = ("Mapa Split");
  }
}




