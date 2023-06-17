
function abrirVideo(){
    var imagem = document.getElementById("astra-imagem");
    var video = document.getElementById("astra-video");
    if(imagem.src.match("./imagens/personagens/astra.jpg")){

        imagem.style.display = "none";
        video.style.display = "block" ;
        video.play();
    }
}
    function fecharVideo(){
        var video = document.getElementById("astra-video");
        var imagem = document.getElementById("astra-imagem");
        if(video.src.match("./imagens/personagens/astra-video.mp4")){
            imagem.style.display = "block";
            video.style.display = "none";
        }

    }

