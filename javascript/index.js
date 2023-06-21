function modoescuro() {
const conteiner = document.getElementById("conteiner");
const background = document.getElementById("modo_claro");



if(background.classList.contains('modoClaro')){

    background.classList.remove('modoClaro');
    background.classList.add('modoEscuro');
    conteiner.style.backgroundColor = "rgb(15, 25, 35)";
    h1.style.backgroundColor = "rgb(236, 231, 223)";
    h1.style.color = "white";
  

      for (var i = 0; i < linksdiv.length; i++) {
        linksdiv[i].style.color = "rgb(236, 231, 223)";
      }
}else{

   
    conteiner.style.backgroundColor = "#ece7df";
    
    for (var i = 0; i < linksdiv.length; i++) {
        linksdiv[i].style.color = "rgb(15, 25, 35)";
      }

}

}

function trocarmodo(){
    const conteiner = document.getElementById("conteiner");
    const background = document.getElementById("modo_claro");
    const linksdiv = document.getElementsByClassName("links");
    const menu = document.getElementById('menu');

        if(background.classList.contains('modoClaro')){
            background.classList.remove('modoClaro');
            background.classList.add('modoEscuro');
            conteiner.style.backgroundColor = "rgb(15, 25, 35)";
            menu.style.color = "rgb(236, 231, 223)";
            menu.style.backgroundColor = "rgb(15, 25, 35)";

            for (var i = 0; i < linksdiv.length; i++) {
                linksdiv[i].style.color = "rgb(236, 231, 223)"; //Letras brancas
              }
        
        }else{


            background.classList.remove('modoEscuro');
            background.classList.add('modoClaro');
            conteiner.style.backgroundColor = "#ece7df";
            menu.style.color = "rgb(15, 25, 35)";
            for (var i = 0; i < linksdiv.length; i++) {
                linksdiv[i].style.color = "rgb(15, 25, 35)";
              }
              menu.style.color = "rgb(15, 25, 35)";
              menu.style.transition="0.9s";
              menu.style.backgroundColor = "rgb(236, 231, 223)";
    }
}



