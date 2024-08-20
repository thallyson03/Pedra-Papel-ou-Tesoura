var elemento = document.querySelectorAll('.player div>img')
var playerOpt="";
var maquinaOpt="";

function audio (text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'pt-BR'; 
    window.speechSynthesis.speak(msg);
}

function validar(){
    let retorno=document.querySelector('.retorno');
    let resultadoTexto="";

    if (playerOpt=="papel") {
        if (maquinaOpt=="papel") {
           resultadoTexto="Empate";
        } else if (maquinaOpt=="pedra"){
            resultadoTexto="Vitoria";
        } else if(maquinaOpt=="tesoura"){
            resultadoTexto="Derrota";
        }
    }

    if (playerOpt=="pedra") {
        if (maquinaOpt=="pedra") {
            resultadoTexto="Empate";
        } else if (maquinaOpt=="tesoura"){
            resultadoTexto="Vitoria";
        } else if(maquinaOpt=="papel"){
            resultadoTexto="Derrota";
        }
    }

    if (playerOpt=="tesoura") {
        if (maquinaOpt=="tesoura") {
            resultadoTexto="Empate";
        } else if (maquinaOpt=="papel"){
            resultadoTexto="Vitoria";
        } else if(maquinaOpt=="pedra"){
            resultadoTexto="Derrota";
        }
    }
    retorno.innerHTML=resultadoTexto;
    audio(resultadoTexto);
}

function resetMaquina(){
    const adversario = document.querySelectorAll('.maquina div');
    for (var i=0;i<adversario.length;i++){
    adversario[i].childNodes[0].style.opacity=0.3;}
}

function maquina(){
    let rand =Math.floor(Math.random()*3);

    const adversario = document.querySelectorAll('.maquina div');
    resetMaquina();
    adversario[rand].firstElementChild.style.opacity = 1;
    maquinaOpt = adversario[rand].firstElementChild.getAttribute('opt');

}

function resetOpacityPlayer() {
    for (var i=0;i<elemento.length; i++){
        elemento[i].style.opacity = 0.3;
         }
}
    for (var i=0;i<elemento.length; i++){
        elemento[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity=1;
        playerOpt=t.target.getAttribute('opt')
        maquina();
        validar();
        });
    }
