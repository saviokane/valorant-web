function abrirVideo(id) {
    var imagem = document.getElementById(id + "-imagem");
    var video = document.getElementById(id + "-video");
  
    imagem.style.display = "none";
    video.style.display = "block";
    video.play();
  }
  
  function fecharVideo(id) {
    var video = document.getElementById(id + "-video");
    var imagem = document.getElementById(id + "-imagem");
  
    imagem.style.display = "block";
    video.style.display = "none";
    video.pause();
  }



