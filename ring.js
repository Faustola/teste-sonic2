// 751, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000,1025, 1050, 1075, 1100, 1125

    let aumentaRing = false;
    let ringColetadoUm = false;
    let ringColetadoDois = false;
    let ringColetadoTres = false;
    let ringColetadoQuatro = false;
    let ringColetadoCinco = false;
    let ringColetadoSeis = false;
    let ringColetadoSete = false;
    let ringColetadoOito = false;
    let ringColetadoNove = false;
    let ringColetadoDez = false;
    let ringColetadoOnze = false;
    let ringColetadoDoze = false;
    let ringColetadoTreze = false;
    let ringColetadoCatorze = false;
    let ringColetadoQuinze = false;
    let ringColetadoDezesseis = false;
    let ringColetadoDezessete = false;
    let ringColetadoDezoito = false;
    let ringColetadoDezenove = false;
    let ringColetadoVinte = false;


    //colisão com rings
function colisaoRing() {
    let sonic = document.querySelector(".sonic");
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
    

    let esquerdaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('left'));
    let direitaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('right'));
    let topoSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('top'));

    let esquerdaRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('left'));
    let direitaRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('right'));
    let esquerdaRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('left'));
    let direitaRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('right'));
    let esquerdaRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('left'));
    let direitaRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('right'));
    let esquerdaRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('left'));
    let direitaRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('right'));
    let esquerdaRingCinco = parseInt(window.getComputedStyle(ringCinco).getPropertyValue('left'));
    let direitaRingCinco = parseInt(window.getComputedStyle(ringCinco).getPropertyValue('right'));
    let esquerdaRingSeis = parseInt(window.getComputedStyle(ringSeis).getPropertyValue('left'));
    let direitaRingSeis = parseInt(window.getComputedStyle(ringSeis).getPropertyValue('right'));
    let esquerdaRingSete = parseInt(window.getComputedStyle(ringSete).getPropertyValue('left'));
    let direitaRingSete = parseInt(window.getComputedStyle(ringSete).getPropertyValue('right'));
    let esquerdaRingOito = parseInt(window.getComputedStyle(ringOito).getPropertyValue('left'));
    let direitaRingOito = parseInt(window.getComputedStyle(ringOito).getPropertyValue('right'));
    let esquerdaRingNove = parseInt(window.getComputedStyle(ringNove).getPropertyValue('left'));
    let direitaRingNove = parseInt(window.getComputedStyle(ringNove).getPropertyValue('right'));
    let esquerdaRingDez = parseInt(window.getComputedStyle(ringDez).getPropertyValue('left'));
    let direitaRingDez = parseInt(window.getComputedStyle(ringDez).getPropertyValue('right'));
    let esquerdaRingOnze = parseInt(window.getComputedStyle(ringOnze).getPropertyValue('left'));
    let direitaRingOnze = parseInt(window.getComputedStyle(ringOnze).getPropertyValue('right'));
    let esquerdaRingDoze = parseInt(window.getComputedStyle(ringDoze).getPropertyValue('left'));
    let direitaRingDoze = parseInt(window.getComputedStyle(ringDoze).getPropertyValue('right'));
    let direitaRingTreze = parseInt(window.getComputedStyle(ringTreze).getPropertyValue('right'));
    let esquerdaRingTreze = parseInt(window.getComputedStyle(ringTreze).getPropertyValue('left'));
    let direitaRingCatorze = parseInt(window.getComputedStyle(ringCatorze).getPropertyValue('right'));
    let esquerdaRingCatorze = parseInt(window.getComputedStyle(ringCatorze).getPropertyValue('left'));
    let direitaRingQuinze = parseInt(window.getComputedStyle(ringQuinze).getPropertyValue('right'));
    let esquerdaRingQuinze = parseInt(window.getComputedStyle(ringQuinze).getPropertyValue('left'));
    let direitaRingDezesseis = parseInt(window.getComputedStyle(ringDezesseis).getPropertyValue('right'));
    let esquerdaRingDezesseis = parseInt(window.getComputedStyle(ringDezesseis).getPropertyValue('left'));
    let esquerdaRingDezessete = parseInt(window.getComputedStyle(ringDezessete).getPropertyValue('left'));
    let direitaRingDezessete = parseInt(window.getComputedStyle(ringDezessete).getPropertyValue('right'));
    let esquerdaRingDezoito = parseInt(window.getComputedStyle(ringDezoito).getPropertyValue('left'));
    let direitaRingDezoito = parseInt(window.getComputedStyle(ringDezoito).getPropertyValue('right'));
    let esquerdaRingDezenove = parseInt(window.getComputedStyle(ringDezenove).getPropertyValue('left'));
    let direitaRingDezenove = parseInt(window.getComputedStyle(ringDezenove).getPropertyValue('right'));
    let esquerdaRingVinte = parseInt(window.getComputedStyle(ringVinte).getPropertyValue('left'));
    let direitaRingVinte = parseInt(window.getComputedStyle(ringVinte).getPropertyValue('right'));

    let topRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('top'));
    let topRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('top'));
    let topRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('top'));
    let topRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('top'));
    let topRingCinco = parseInt(window.getComputedStyle(ringCinco).getPropertyValue('top'));
    let topRingSeis = parseInt(window.getComputedStyle(ringSeis).getPropertyValue('top'));
    let topRingSete = parseInt(window.getComputedStyle(ringSete).getPropertyValue('top'));
    let topRingOito = parseInt(window.getComputedStyle(ringOito).getPropertyValue('top'));
    let topRingNove = parseInt(window.getComputedStyle(ringNove).getPropertyValue('top'));
    let topRingDez = parseInt(window.getComputedStyle(ringDez).getPropertyValue('top'));
    let topRingOnze = parseInt(window.getComputedStyle(ringOnze).getPropertyValue('top'));
    let topRingDoze = parseInt(window.getComputedStyle(ringDoze).getPropertyValue('top'));
    let topRingTreze = parseInt(window.getComputedStyle(ringTreze).getPropertyValue('top'));
    let topRingCatorze = parseInt(window.getComputedStyle(ringCatorze).getPropertyValue('top'));
    let topRingQuinze = parseInt(window.getComputedStyle(ringQuinze).getPropertyValue('top'));
    let topRingDezesseis = parseInt(window.getComputedStyle(ringDezesseis).getPropertyValue('top'));
    let topRingDezessete = parseInt(window.getComputedStyle(ringDezessete).getPropertyValue('top'));
    let topRingDezoito = parseInt(window.getComputedStyle(ringDezoito).getPropertyValue('top'));
    let topRingDezenove = parseInt(window.getComputedStyle(ringDezenove).getPropertyValue('top'));
    let topRingVinte = parseInt(window.getComputedStyle(ringVinte).getPropertyValue('top'));
    

    if(esquerdaSonic == esquerdaRingUm && topoSonic >= 138 && topRingUm <200 || direitaSonic == direitaRingUm && topoSonic>= 138 && topRingUm <200) {
            ringUm.style.cssText= "width:40px; height:40px; top:155px;";
            ringUm.src="images/brilho-ring.gif";
        
        aumentaRing = true;

        function coletouRing() {
            ringColetadoUm = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringUm.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingDois && topoSonic >= 138 && topRingDois <200 || direitaSonic == direitaRingDois && topoSonic>= 138 && topRingDois <200 ) {
        ringDois.style.cssText="width:40px; height:40px; top:155px";
        ringDois.src="images/brilho-ring.gif";

        aumentaRing = true;
    
        function coletouRing() {
            ringColetadoDois = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDois.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }
    if(esquerdaSonic == esquerdaRingTres && topoSonic >= 138 && topRingTres <200 || direitaSonic == direitaRingTres && topoSonic>= 138 && topRingTres <200 ) {
        ringTres.style.cssText="width:40px; height:40px; top:155px";
        ringTres.src="images/brilho-ring.gif";

        aumentaRing = true;
        
        function coletouRing() {
            ringColetadoTres = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringTres.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }
    if(esquerdaSonic == esquerdaRingQuatro && topoSonic >= 138 && topRingQuatro <200 || direitaSonic == direitaRingQuatro && topoSonic>= 138 && topRingQuatro <200 ) {
        ringQuatro.style.cssText="width:40px; height:40px; top:155px";
        ringQuatro.src="images/brilho-ring.gif";

        aumentaRing = true;
        
        function coletouRing() {
            ringColetadoQuatro = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringQuatro.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }  

    if(esquerdaSonic == esquerdaRingCinco && topoSonic >= 138 && topRingCinco <200 || direitaSonic == direitaRingCinco && topoSonic>= 138 && topRingCinco <200 ) {
        ringCinco.style.cssText="width:40px; height:40px; top:155px;";
        ringCinco.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoCinco = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringCinco.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }

    if(esquerdaSonic == esquerdaRingSeis && topoSonic >= 138 && topRingSeis <200 || direitaSonic == direitaRingSeis && topoSonic>= 138 && topRingSeis <200 ) {
        ringSeis.style.cssText="width:40px; height:40px; top:155px;";
        ringSeis.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoSeis = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringSeis.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }

    if(esquerdaSonic == esquerdaRingSete && topoSonic >= 138 && topRingSete <200 || direitaSonic == direitaRingSete && topoSonic>= 138 && topRingSete <200 ) {
        ringSete.style.cssText="width:40px; height:40px; top:155px;";
        ringSete.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoSete = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringSete.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }

    if(esquerdaSonic == esquerdaRingOito && topoSonic >= 138 && topRingOito <200 || direitaSonic == direitaRingOito && topoSonic>= 138 && topRingOito <200 ) {
        ringOito.style.cssText="width:40px; height:40px; top:155px;";
        ringOito.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoOito = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringOito.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }

    if(esquerdaSonic == esquerdaRingNove && topoSonic >= 138 && topRingNove <200 || direitaSonic == direitaRingNove && topoSonic>= 138 && topRingNove <200 ) {
        ringNove.style.cssText="width:40px; height:40px; top:155px;";
        ringNove.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoNove = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringNove.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }

    if(esquerdaSonic == esquerdaRingDez && topoSonic >= 138 && topRingDez <200 || direitaSonic == direitaRingDez && topoSonic>= 138 && topRingDez <200 ) {
        ringDez.style.cssText="width:40px; height:40px; top:155px;";
        ringDez.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoDez = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDez.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }

    if(esquerdaSonic == esquerdaRingOnze && topoSonic >= 138 && topRingOnze <200 || direitaSonic == direitaRingOnze && topoSonic>= 138 && topRingOnze <200 ) {
        ringOnze.style.cssText="width:40px; height:40px; top:155px;";
        ringOnze.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoOnze = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringOnze.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }

    if(esquerdaSonic == esquerdaRingDoze && topoSonic >= 138 && topRingDoze <200 || direitaSonic == direitaRingDoze && topoSonic>= 138 && topRingDoze <200 ) {
        ringDoze.style.cssText="width:40px; height:40px; top:155px;";
        ringDoze.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoDoze = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDoze.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)

    }
    if(esquerdaSonic == esquerdaRingTreze && topoSonic >= 138 && topRingTreze <200 || direitaSonic == direitaRingTreze && topoSonic>= 138 && topRingTreze <200 ) {
        ringTreze.style.cssText="width:40px; height:40px; top:155px;";
        ringTreze.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoTreze = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringTreze.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingCatorze && topoSonic >= 138 && topRingCatorze <200 || direitaSonic == direitaRingCatorze && topoSonic>= 138 && topRingCatorze <200) {
        ringCatorze.style.cssText="width:40px; height:40px; top:155px;";
        ringCatorze.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoCatorze = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringCatorze.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingQuinze && topoSonic >= 138 && topRingQuinze <200 || direitaSonic == direitaRingQuinze && topoSonic>= 138 && topRingQuinze <200 ) {
        ringQuinze.style.cssText="width:40px; height:40px; top:155px;";
        ringQuinze.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoQuinze = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringQuinze.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingDezesseis && topoSonic >= 138 && topRingDezesseis <200 || direitaSonic == direitaRingDezesseis && topoSonic>= 138 && topRingDezesseis <200 ) {
        ringDezesseis.style.cssText="width:40px; height:40px; top:155px;";
        ringDezesseis.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoDezesseis = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDezesseis.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingDezessete && topoSonic >= 138 && topRingDezessete <200 || direitaSonic == direitaRingDezessete && topoSonic>= 138 && topRingDezessete <200 ) {
        ringDezessete.style.cssText="width:40px; height:40px; top:155px;";
        ringDezessete.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoDezessete = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDezessete.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingDezoito && topoSonic >= 138 && topRingDezoito <200  || direitaSonic == direitaRingDezoito && topoSonic>= 138 && topRingDezoito <200 ) {
        ringDezoito.style.cssText="width:40px; height:40px; top:155px;";
        ringDezoito.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoDezoito = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDezoito.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingDezenove && topoSonic >= 138 && topRingDezenove <200 || direitaSonic == direitaRingDezenove && topoSonic>= 138 && topRingDezenove <200 ) {
        ringDezenove.style.cssText="width:40px; height:40px; top:155px;";
        ringDezenove.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoDezenove = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringDezenove.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    if(esquerdaSonic == esquerdaRingVinte && topoSonic >= 138 && topRingVinte <200 || direitaSonic == direitaRingVinte && topoSonic>= 138 && topRingVinte <200 ) {
        ringVinte.style.cssText="width:40px; height:40px; top:155px;";
        ringVinte.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoVinte = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

        function someRing() {
            ringVinte.style.cssText="transform: scale(0); top:200px";
        }
        setTimeout(someRing,400)
    }
    
};

setInterval(colisaoRing, 1);