/*let inicioMostraSonic = () => {
    let inicioSonic = document.querySelector(".inicio-sonic");
    let inicioGamb = document.querySelector(".inicio-gamb");
    let telaInicio = document.querySelector(".tela-inicio");
    let telaJogo = document.querySelector(".tela-jogo")

    inicioSonic.src="images/sonic-beleza-inicio.gif";

    let disparaAnimation = () => {
        inicioGamb.classList.add('animation-inicio');
    }
    setTimeout(disparaAnimation, 1400);
    let destroyElementsInicio = () => {
        telaInicio.style.display="none";
        telaJogo.style.display="block"
    }
    setTimeout(destroyElementsInicio, 3400);
}*/


//Movimentação do personagem

let dx;
let dy;
let px;
let py;
let vel;
let obj;
let tmp;
let i = 0;
let io = 0;
let frame = 3;
let viradoDireita = true;
let viradoEsquerda = false;
let ok;
let okay;
let correndo = false;

let sonic = document.querySelector(".sonic");
let direitaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('right'));
let esquerdaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('left'));
let topoSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('top'));



//Pulo e ataque
window.addEventListener('keydown', function(e) {
    let sonic = document.querySelector(".sonic")

    if (e.key === "w" && i == 0) {
        sonic.src="images/pulo.png";
        sonic.classList.add("sonic-pulo");
        i++;
        io++;

        function paraPulo() {
            sonic.classList.remove('sonic-pulo');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false && correndo == false) {
                sonic.src="images/sonic-parado-inicio-esquerda.gif";
            };

            if (viradoEsquerda == true && viradoDireita == false && correndo == true) {
                sonic.src="images/sonic-corre-esquerda.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == false) {
                sonic.src="images/sonic-parado-inicio-direita.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == true) {
                sonic.src="images/sonic-corre-direita.gif";
            };
          }

          setTimeout(paraPulo, 1000);
    }

    if (e.key === "s" && i == 0) {
        sonic.style.top="170px"
        sonic.src="images/pulo.png";
        sonic.classList.add("sonic-ataque");
        i++;
        io++;

        function paraAtaque() {
            sonic.style.top="160px"
            sonic.classList.remove('sonic-ataque');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false) {
                sonic.src="images/sonic-parado-inicio-esquerda.gif";
            };

            if (viradoEsquerda == true && viradoDireita == false && correndo == true) {
                sonic.src="images/sonic-corre-esquerda.gif";
            };
            
            if (viradoDireita == true && viradoEsquerda == false) {
                sonic.src="images/sonic-parado-inicio-direita.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == true) {
                sonic.src="images/sonic-corre-direita.gif";
            };
          }

          setTimeout(paraAtaque, 800);
    }
})


// Movimentação para os lados
function inicia() {
dx = 0;
px = 30;
vel = 4;


    document.addEventListener('keydown', function(e) {
        let sonic = document.querySelector(".sonic");

        if (e.key === "d" && i == 0) {
            viradoDireita = true;
            viradoEsquerda = false;
            correndo = true;

            sonic.src="images/sonic-corre-direita.gif";
            frame++;
            dx = .4;
            if (frame ===4.1 ) {
                sonic.src="images/sonic-corre-direita/sonic-corre-1.png"
            }
            if (frame ===6) {
                sonic.src="images/sonic-corre-direita/sonic-corre-2.png"
            }
            if (frame ===7) {
                sonic.src="images/sonic-corre-direita/sonic-corre-3.png"
            }
            if (frame ===8) {
                sonic.src="images/sonic-corre-direita/sonic-corre-4.png"
            }
            if (frame === 9) {
                frame = 4;
            }

        }

        if (e.key === "a" & i ==0) {
            viradoDireita = false;
            viradoEsquerda = true;
            correndo = true;
            vel = 4;
            sonic.src="images/sonic-corre-esquerda.gif";
            frame++;
            dx = -.4;
           if (frame ===4.1 ) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-1.png"
            }
            if (frame ===6) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-2.png"
            }
            if (frame ===7) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-3.png"
            }
            if (frame ===8) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-4.png"
            }
            if (frame === 9) {
                frame = 4;
            }

        }        
    });

    document.addEventListener("keyup", function (e) {
        let sonic = document.querySelector(".sonic");

        if (e.key === "d") {
            dx = 0;
            correndo = false;
            
            sonic.src="images/sonic-parado-inicio-direita.gif"
            frame = 3;

            if (io == 1) {
                sonic.src="images/pulo.png";
            }
        };

        if (e.key === "a") {
            dx = 0;
            correndo = false;
            sonic.src="images/sonic-parado-inicio-esquerda.gif"
            frame = 3;

            if (io == 1) {
                sonic.src="images/pulo.png";
            }
        }});

        tmp = setInterval(enterFrame, 10);

}



function enterFrame() {
    let sonic = document.querySelector(".sonic");
    let background = document.querySelector(".div-img")
    let ringUm = document.querySelector(".ring-1");
    let ringDois = document.querySelector(".ring-2");
    let ringTres = document.querySelector(".ring-3");
    let ringQuatro = document.querySelector(".ring-4");
    let ringCinco = document.querySelector(".ring-5");
    let ringSeis = document.querySelector(".ring-6");
    let ringSete = document.querySelector(".ring-7");
    let ringOito = document.querySelector(".ring-8");
    let ringNove = document.querySelector(".ring-9");
    let ringDez = document.querySelector(".ring-10");
    let ringOnze = document.querySelector(".ring-11");
    let ringDoze = document.querySelector(".ring-12");
    let ringTreze = document.querySelector(".ring-13");
    let ringCatorze = document.querySelector(".ring-14");
    let ringQuinze = document.querySelector(".ring-15");
    let ringDezesseis = document.querySelector(".ring-16");
    let ringDezessete = document.querySelector(".ring-17");
    let ringDezoito = document.querySelector(".ring-18");
    let ringDezenove = document.querySelector(".ring-19");
    let ringVinte = document.querySelector(".ring-20");

    let direitaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('right'));
    let esquerdaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('left'));
    let topoSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('top'));
    let esquerdaBackground = parseInt(window.getComputedStyle(background).getPropertyValue('background-position'));
    let esquerdaRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('left'));
    let esquerdaRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('left'));
    let esquerdaRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('left'));
    let esquerdaRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('left'));
    let esquerdaRingCinco = parseInt(window.getComputedStyle(ringCinco).getPropertyValue('left'));
    let esquerdaRingSeis = parseInt(window.getComputedStyle(ringSeis).getPropertyValue('left'));
    let esquerdaRingSete = parseInt(window.getComputedStyle(ringSete).getPropertyValue('left'));
    let esquerdaRingOito = parseInt(window.getComputedStyle(ringOito).getPropertyValue('left'));
    let esquerdaRingNove = parseInt(window.getComputedStyle(ringNove).getPropertyValue('left'));
    let esquerdaRingDez = parseInt(window.getComputedStyle(ringDez).getPropertyValue('left'));
    let esquerdaRingOnze = parseInt(window.getComputedStyle(ringOnze).getPropertyValue('left'));
    let esquerdaRingDoze = parseInt(window.getComputedStyle(ringDoze).getPropertyValue('left'));
    let esquerdaRingTreze = parseInt(window.getComputedStyle(ringTreze).getPropertyValue('left'));
    let esquerdaRingCatorze = parseInt(window.getComputedStyle(ringCatorze).getPropertyValue('left'));
    let esquerdaRingQuinze = parseInt(window.getComputedStyle(ringQuinze).getPropertyValue('left'));
    let esquerdaRingDezesseis = parseInt(window.getComputedStyle(ringDezesseis).getPropertyValue('left'));
    let esquerdaRingDezessete = parseInt(window.getComputedStyle(ringDezessete).getPropertyValue('left'));
    let esquerdaRingDezoito = parseInt(window.getComputedStyle(ringDezoito).getPropertyValue('left'));
    let esquerdaRingDezenove = parseInt(window.getComputedStyle(ringDezenove).getPropertyValue('left'));
    let esquerdaRingVinte = parseInt(window.getComputedStyle(ringVinte).getPropertyValue('left'));


        ok = px += dx * vel;

        okay = sonic.style.left=ok+"px";

        if (esquerdaSonic <= 0 && viradoEsquerda == true) {
            px = 0;
        }



//Colisão com o fundo
    if (esquerdaSonic >= 320 && esquerdaBackground <= 0) { 
        background.style.backgroundPosition=-0.75*(ok-320)+"px";

        //ring

        if (ringColetadoUm = true) {
            ringUm.style.left= 700-0.75*(ok-320)+"px";
        }else {
            ringUm.style.left=700 + "px";
        }

        if (ringColetadoDois = true) {
            ringDois.style.left=775 -0.75*(ok-320)+"px";
        }else {
            ringDois.style.left=775 + "px";
        }

        if (ringColetadoTres = true) {
            ringTres.style.left=1000 -0.75*(ok-320)+"px";
        }else {
            ringTres.style.left=1000 + "px";
        }

        if (ringColetadoQuatro = true) {
            ringQuatro.style.left=1350 -0.75*(ok-320)+"px";
        }else {
            ringQuatro.style.left=1350+"px";
        }

        if (ringColetadoCinco = true) {
            ringCinco.style.left= 1375-0.75*(ok-320)+"px";
        }else {
            ringCinco.style.left=1375 + "px";
        }

        if (ringColetadoSeis = true) {
            ringSeis.style.left= 1800-0.75*(ok-320)+"px";
        }else {
            ringSeis.style.left=1800 + "px";
        }

        if (ringColetadoSete = true) {
            ringSete.style.left= 1875-0.75*(ok-320)+"px";
        }else {
            ringSete.style.left=1875 + "px";
        }

        if (ringColetadoOito = true) {
            ringOito.style.left= 2200-0.75*(ok-320)+"px";
        }else {
            ringOito.style.left=2200 + "px";
        }

        if (ringColetadoNove = true) {
            ringNove.style.left= 2650-0.75*(ok-320)+"px";
        }else {
            ringNove.style.left=2650 + "px";
        }

        if (ringColetadoDez = true) {
            ringDez.style.left= 2675-0.75*(ok-320)+"px";
        }else {
            ringDez.style.left=2675 + "px";
        }

        if (ringColetadoOnze = true) {
            ringOnze.style.left= 3200-0.75*(ok-320)+"px";
        }else {
            ringOnze.style.left=3200 + "px";
        }

        if (ringColetadoDoze = true) {
            ringDoze.style.left= 3300-0.75*(ok-320)+"px";
        }else {
            ringDoze.style.left=3300 + "px";
        }

        if (ringColetadoTreze = true) {
            ringTreze.style.left= 3600-0.75*(ok-320)+"px";
        }else {
            ringTreze.style.left=3600 + "px";
        }

        if (ringColetadoCatorze = true) {
            ringCatorze.style.left= 4025-0.75*(ok-320)+"px";
        }else {
            ringCatorze.style.left=4025 + "px";
        }

        if (ringColetadoQuinze = true) {
            ringQuinze.style.left= 4050-0.75*(ok-320)+"px";
        }else {
            ringQuinze.style.left=4050 + "px";
        }

        if (ringColetadoDezesseis = true) {
            ringDezesseis.style.left= 4775-0.75*(ok-320)+"px";
        }else {
            ringDezesseis.style.left=4775 + "px";
        }

        if (ringColetadoDezessete = true) {
            ringDezessete.style.left= 4900-0.75*(ok-320)+"px";
        }else {
            ringDezessete.style.left=4900 + "px";
        }

        if (ringColetadoDezoito = true) {
            ringDezoito.style.left= 4800-0.75*(ok-320)+"px";
        }else {
            ringDezoito.style.left=4800 + "px";
        }

        if (ringColetadoDezenove = true) {
            ringDezenove.style.left= 4125-0.75*(ok-320)+"px";
        }else {
            ringDezenove.style.left=4125 + "px";
        }

        if (ringColetadoVinte = true) {
            ringVinte.style.left= 4100-0.75*(ok-320)+"px";
        }else {
            ringVinte.style.left=4100 + "px";
        }

        //renova rings

        if(esquerdaRingUm <= 685) {
            ringUm.style.display="block";
        }
        if(esquerdaRingUm >=686){
            ringUm.style.display="none";
        }
        if(esquerdaRingUm <=-5){
            ringUm.style.display="none";
        }
        if(esquerdaRingDois <= 685) {
            ringDois.style.display="block";
        }
        if(esquerdaRingDois >=686){
            ringDois.style.display="none";
        }
        if(esquerdaRingDois <=-5){
            ringDois.style.display="none";
        }
        if(esquerdaRingTres <= 685) {
            ringTres.style.display="block";
        }
        if(esquerdaRingTres >=686){
            ringTres.style.display="none";
        }
        if(esquerdaRingTres <=-5){
            ringTres.style.display="none";
        }
        if(esquerdaRingQuatro <= 685) {
            ringQuatro.style.display="block";
        }
        if(esquerdaRingQuatro >=686){
            ringQuatro.style.display="none";
        }
        if(esquerdaRingQuatro <=-5){
            ringQuatro.style.display="none";
        }
        if(esquerdaRingCinco <= 685) {
            ringCinco.style.display="block";
        }
        if(esquerdaRingCinco >=686){
            ringCinco.style.display="none";
        }
        if(esquerdaRingCinco <=-5){
            ringCinco.style.display="none";
        }
        if(esquerdaRingSeis <= 685) {
            ringSeis.style.display="block";
        }
        if(esquerdaRingSeis >=686){
            ringSeis.style.display="none";
        }
        if(esquerdaRingSeis <=-5){
            ringSeis.style.display="none";
        }
        if(esquerdaRingSete <= 685) {
            ringSete.style.display="block";
        }
        if(esquerdaRingSete >=686){
            ringSete.style.display="none";
        }
        if(esquerdaRingSete <=-5){
            ringSete.style.display="none";
        }
        if(esquerdaRingOito <= 685) {
            ringOito.style.display="block";
        }
        if(esquerdaRingOito >=686){
            ringOito.style.display="none";
        }
        if(esquerdaRingOito <=-5){
            ringOito.style.display="none";
        }
        if(esquerdaRingNove <= 685) {
            ringNove.style.display="block";
        }
        if(esquerdaRingNove >=686){
            ringNove.style.display="none";
        }
        if(esquerdaRingNove <=-5){
            ringNove.style.display="none";
        }
        if(esquerdaRingDez <= 685) {
            ringDez.style.display="block";
        }
        if(esquerdaRingDez >=686){
            ringDez.style.display="none";
        }
        if(esquerdaRingDez <=-5){
            ringDez.style.display="none";
        }
        if(esquerdaRingOnze <= 685) {
            ringOnze.style.display="block";
        }
        if(esquerdaRingOnze >=686){
            ringOnze.style.display="none";
        }
        if(esquerdaRingOnze <=-5){
            ringOnze.style.display="none";
        }
        if(esquerdaRingDoze <= 685) {
            ringDoze.style.display="block";
        }
        if(esquerdaRingDoze >=686){
            ringDoze.style.display="none";
        }
        if(esquerdaRingDoze <=-5){
            ringDoze.style.display="none";
        }
        if(esquerdaRingTreze <= 685) {
            ringTreze.style.display="block";
        }
        if(esquerdaRingTreze >=686){
            ringTreze.style.display="none";
        }
        if(esquerdaRingTreze <=-5){
            ringTreze.style.display="none";
        }
        if(esquerdaRingCatorze <= 685) {
            ringCatorze.style.display="block";
        }
        if(esquerdaRingCatorze >=686){
            ringCatorze.style.display="none";
        }
        if(esquerdaRingCatorze <=-5){
            ringCatorze.style.display="none";
        }
        if(esquerdaRingQuinze <= 685) {
            ringQuinze.style.display="block";
        }
        if(esquerdaRingQuinze >=686){
            ringQuinze.style.display="none";
        }
        if(esquerdaRingQuinze <=-5){
            ringQuinze.style.display="none";
        }
        if(esquerdaRingDezesseis <= 685) {
            ringDezesseis.style.display="block";
        }
        if(esquerdaRingDezesseis >=686){
            ringDezesseis.style.display="none";
        }
        if(esquerdaRingDezesseis <=-5){
            ringDezesseis.style.display="none";
        }
        if(esquerdaRingDezessete <= 685) {
            ringDezessete.style.display="block";
        }
        if(esquerdaRingDezessete >=686){
            ringDezessete.style.display="none";
        }
        if(esquerdaRingDezessete <=-5){
            ringDezessete.style.display="none";
        }
        if(esquerdaRingDezoito <= 685) {
            ringDezoito.style.display="block";
        }
        if(esquerdaRingDezoito >=686){
            ringDezoito.style.display="none";
        }
        if(esquerdaRingDezoito <=-5){
            ringDezoito.style.display="none";
        }
        if(esquerdaRingDezenove <= 685) {
            ringDezenove.style.display="block";
        }
        if(esquerdaRingDezenove >=686){
            ringDezenove.style.display="none";
        }
        if(esquerdaRingDezenove <=-5){
            ringDezenove.style.display="none";
        }
        if(esquerdaRingVinte <= 685) {
            ringVinte.style.display="block";
        }
        if(esquerdaRingVinte >=686){
            ringVinte.style.display="none";
        }
        if(esquerdaRingVinte <=-5){
            ringVinte.style.display="none";
        }


        ok = 0;

        sonic.style.left="320px";
    }

    if (esquerdaSonic == 320 && esquerdaBackground >= 0.1) {
        background.style.backgroundPosition=-1+"px";
    }

}


window.addEventListener("load", inicia());


//contador de rings

let ringPoints = document.getElementById("ring-points")
let qtdRings = 0;
ringPoints.innerHTML=qtdRings;


function aumentarRing() {

    if (aumentaRing == true) {
        qtdRings++;
        
        ringPoints.innerHTML=qtdRings;

    }

    if(qtdRings >= 10) {
        ringPoints.style.left="20px";
    }
    if(qtdRings <= 9) {
        ringPoints.style.left="25px";
    }
    
}

setInterval(aumentarRing, 4)

