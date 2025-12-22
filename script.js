const answers = { q1:'No', q2:'No', q3:'No', q4:'No', q5:'No' };

// Drag & Drop logic
document.querySelectorAll('.hat').forEach(hat => {
    hat.addEventListener('dragstart', e => {
        e.dataTransfer.setData('question', hat.dataset.question);
    });
});

document.querySelectorAll('.dropzone').forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('drop', e => {
        const question = e.dataTransfer.getData('question');
        const answer = zone.classList.contains('yea') ? 'Yea' : 'No';
        answers[question] = answer;

        // Move the hat to dropped position
        const hat = document.querySelector(`.hat[data-question="${question}"]`);
        hat.style.left = zone.offsetLeft + zone.offsetWidth/2 + 'px';
        hat.style.top = zone.offsetTop + zone.offsetHeight/2 + 'px';
    });
});

function getPoints(value){
    switch(value){
        case 'Yea': return 1;
        case 'No': return -1;
        default: return 0;
    }
}

function checkNaughtyOrNice(){
    const resultBox = document.getElementById('santaResult');
    resultBox.classList.remove('d-none','santa-yea','santa-no');

    // Auto No if question 4 (kill anyone) is Yea
    if(answers.q4 === 'Yea'){
        resultBox.classList.add('santa-no');
        resultBox.innerHTML = `
            😈🪨 Oh no! <br>
            You answered YES to "Did you kill anyone?" 😱 <br>
            Santa automatically put you on the <strong>Naughty List</strong>!
        `;
        return;
    }

    const score = Object.values(answers).reduce((sum,v)=>sum+getPoints(v),0);

    if(score > 2){
        resultBox.classList.add('santa-yea');
        resultBox.innerHTML = `
            🎅✨ Ho Ho Ho! <br>
            You made the <strong>Nice List</strong>! <br>
            Expect presents under the tree 🎁
        `;
    } else {
        resultBox.classList.add('santa-no');
        resultBox.innerHTML = `
            😈🪨 Uh oh... <br>
            You landed on the <strong>Naughty List</strong> <br>
            Santa brought coal this year
        `;
    }
}

// Snow effect
const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    const size = Math.random() * 10 + 10;
    snowflake.style.fontSize = size + 'px';
    const duration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = duration + 's';
    snowContainer.appendChild(snowflake);
    setTimeout(()=> snowflake.remove(), duration * 1000);
}

setInterval(createSnowflake, 200);
