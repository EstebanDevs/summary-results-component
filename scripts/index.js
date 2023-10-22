//Usar una IIFE para encapsular el codigo que me permite obtener otras puntuaciones de un json, sirve para la modularización de codigo
(async () => {
    const data = await fetch('../data.json').then(response => response.json()).catch(e => console.log)
    const score = document.getElementById('score');
    let reactionScore = document.getElementById('reaction-score');
    let memoryScore = document.getElementById('memory-score');
    let verbalScore = document.getElementById('verbal-score');
    let visualScore = document.getElementById('visual-score');
    let calcScore = 0;

    data.forEach(cat => {
        const { category, score } = cat;
        //Actualizar el puntaje de cada categoria
        switch(category) {
            case "Reaction":
                reactionScore.textContent = score;
                calcScore += score;
                break;
            case "Memory":
                memoryScore.textContent = score;
                calcScore += score;
                break;
            case "Verbal":
                verbalScore.textContent = score;
                calcScore += score;
                break;
            case "Visual":
                visualScore.textContent = score;
                calcScore += score;
                break;
            default:
                break;
        }
    });

    //Calcular el promedio de puntuación general
    calcScore /= data.length;

    //Actualizar el el contenedor de puntuación general
    score.textContent = Math.floor(calcScore);
})();


