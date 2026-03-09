
if (!localStorage.getItem('completedquiz')) {
    localStorage.setItem('completedquiz', 0) 
}

completedquiz = localStorage.getItem('completedquiz')



function showElements() {
    console.log('showelements')
    let elements = document.querySelectorAll(".easy, .mediumtitle, .hardtitle, .veryhardtitle, .impossibletitle")

    elements.forEach(function(element) {
        element.style.display = 'block';
    });
}

document.getElementById('revealquiz').addEventListener('click', showElements);

document.getElementById('submitpart1').addEventListener('click', checkpart1);
const anspart1 = ["Joern","Critical Ops","I am unemployed"];
let chances = 3;

//checks part 1
function checkpart1() {
    let score = 0;
    const ans1 = document.querySelector('input[name="q1.1"]:checked').value;
    const ans2 = document.querySelector('input[name="q1.2"]:checked').value;
    const ans3 = document.querySelector('input[name="q1.3"]:checked').value;
    let responses = [ans1, ans2, ans3]
    
    for (let count = 0; count < anspart1.length; count++) {
        if (responses[count] === anspart1[count]) {
            score ++;
        }

    }

    if (document.getElementById('score1')) {
        document.getElementById('score1').innerText = `score is ${score}`;
    } else{
        const text = document.createElement('p');
        text.innerText = `score is ${score}`
        text.id = 'score1'
        document.getElementById('answer1').appendChild(text)
    }

    if (score < 3) {
        chances = chances - 1;
    } else{
        document.getElementById('answer1').append("yay!")
        mediumq = document.getElementsByClassName('mediumquestions')
        for (let i = 0; i < mediumq.length; i++) {
            mediumq[i].style.display = 'block';
        }
    }
    
    document.getElementById('chances1').innerText = `chances left: ${chances}`
    checkChances();


}

function checkChances() {
    if (Number(chances) === 0) {
    console.log('chances is 0')
    document.getElementById('submitpart1').disabled = true;
    document.getElementById('submitpart2').disabled = true;
    document.getElementById('submitpart3').disabled = true;
    document.getElementById('submitpart4').disabled = true;
    document.getElementById('submitpart5').disabled = true;
    openDialog();
    }
}



// checks part 2
const anspart2 = ["Air Force Medic", "Geography", "CCE", "S1 OP2"]
function checkpart2() {
    let score = 0;
    const ans1 = document.querySelector('input[name="q2.1"]:checked').value;
    const ans2 = document.querySelector('input[name="q2.2"]:checked').value;
    const ans3 = document.querySelector('input[name="q2.3"]:checked').value;
    const ans4 = document.querySelector('input[name="q2.4"]:checked').value;
    let responses = [ans1, ans2, ans3, ans4]
    
    for (let count = 0; count < anspart2.length; count++) {
        if (responses[count] === anspart2[count]) {
            score ++;
        }

    }

    if (document.getElementById('score2')) {
        document.getElementById('score2').innerText = `score is ${score}`;
    } else{
        const text = document.createElement('p');
        text.innerText = `score is ${score}`
        text.id = 'score2'
        document.getElementById('answer2').appendChild(text)
    }

    if (score < 4) {
        chances = chances - 1;
    } else{
        document.getElementById('answer2').append("yay!")
        hardq = document.getElementsByClassName('hardquestions')
        for (let i = 0; i < hardq.length; i++) {
            hardq[i].style.display = 'block';
        }
    }
    
    document.getElementById('chances2').innerText = `chances left: ${chances}`;
    checkChances()
}

document.getElementById('submitpart2').addEventListener('click', checkpart2)

// checks part 3
const anspart3 = ["awig", "Signals", "real"]
function checkpart3() {
    let score = 0;
    const ans1 = document.getElementById('q3.1').value;
    const ans2 = document.querySelector('input[name="q3.2"]:checked').value;
    const ans3 = document.getElementById('q3.3').value
    let responses = [ans1, ans2, ans3]
    
    for (let count = 0; count < anspart3.length; count++) {
        if (responses[count] === anspart3[count]) {
            score ++;
        }

    }

    if (document.getElementById('score3')) {
        document.getElementById('score3').innerText = `score is ${score}`;
    } else{
        const text = document.createElement('p');
        text.innerText = `score is ${score}`
        text.id = 'score3'
        document.getElementById('answer3').appendChild(text)
    }

    if (score < 3) {
        chances = chances - 1;
    } else{
        document.getElementById('answer3').append("yay!")
        veryhardq = document.getElementsByClassName('veryhardquestions')
        for (let i = 0; i < veryhardq.length; i++) {
            veryhardq[i].style.display = 'block';
        }
    }
    
    document.getElementById('chances3').innerText = `chances left: ${chances}`;
    checkChances()
}

document.getElementById('submitpart3').addEventListener('click', checkpart3)

// checks part 4
const anspart4 = ["pe", "Cooked", "fiddle","mknight"]
function checkpart4() {
    console.log('part 4 button pressed');
    let score = 0;
    const ans1part1 = document.getElementById('q4.1part1').value;
    const ans1part2 = document.getElementById('q4.1part2').value;
    const ans2 = document.getElementById('subject').value;
    const ans3 = document.querySelector('input[name="q4.3"]:checked').value;
    const ans4 = document.querySelector('input[name="q4.4"]:checked').value;
    const ans5 = document.querySelector('input[name="q4.5"]:checked').value;

    let responses = [ans2, ans3, ans4, ans5]

    let ans4q1 = ['tick', 'brock']
    let responsesq1 = [ans1part1, ans1part2]
    ans4q1.sort();
    responsesq1.sort();
    if (JSON.stringify(ans4q1) === JSON.stringify(responsesq1)){
        score++;
    }
    
    for (let count = 0; count < anspart4.length; count++) {
        if (responses[count] === anspart4[count]) {
            score ++;
        }

    }

    if (document.getElementById('score4')) {
        document.getElementById('score4').innerText = `score is ${score}`;
    } else{
        const text = document.createElement('p');
        text.innerText = `score is ${score}`
        text.id = 'score4'
        document.getElementById('answer4').appendChild(text)
    }

    if (score < 5) {
        chances = chances - 1;
    } else{
        document.getElementById('answer4').append("yay!")
        impossibleq = document.getElementsByClassName('impossiblequestions')
        for (let i = 0; i < impossibleq.length; i++) {
            impossibleq[i].style.display = 'block';
        }
    }
    
    document.getElementById('chances4').innerText = `chances left: ${chances}`;
    checkChances()
}

document.getElementById('submitpart4').addEventListener('click', checkpart4)

// checks part 5
const anspart5 = ["misgiwab", "108", "fine","carpark", "tujuh puluh sembilan"]
function checkpart5() {
    console.log('part 5 button pressed');
    let score = 0;
    const ans1 = document.getElementById('part5q1').value;
    const ans2 = document.getElementById('part5q2').value;
    const ans3 = document.querySelector('input[name="q5.3"]:checked').value;
    const ans4 = document.querySelector('input[name="q5.4"]:checked').value;
    const ans5 = document.getElementById('part5q5').value;

    let responses = [ans1, ans2, ans3, ans4, ans5]

    
    for (let count = 0; count < anspart5.length; count++) {
        if (responses[count] === anspart5[count]) {
            score ++;
        }

    }

    if (document.getElementById('score5')) {
        document.getElementById('score5').innerText = `score is ${score}`;
    } else{
        const text = document.createElement('p');
        text.innerText = `score is ${score}`
        text.id = 'score5'
        document.getElementById('answer5').appendChild(text)
    }

    if (score < 5) {
        chances = chances - 1;
    } else{
        document.getElementById('answer5').append("yay!")
        completedquiz = parseInt(completedquiz) + 1
        localStorage.setItem('completedquiz', completedquiz)
        console.log(completedquiz)
        console.log(document.getElementById('quizstats'));
        document.getElementById('quizstats').innerText = `You are the ${completedquiz}th person to have completed the quizzes!`
        
        }
    
    
    document.getElementById('chances5').innerText = `chances left: ${chances}`;
    checkChances()
}

document.getElementById('submitpart5').addEventListener('click', checkpart5)



//hacks
function adminprivileges() {
    if (document.getElementById('password').value === 'bawigbawig') {
        document.getElementById('hacks').style.display = 'block';
    } 
    console.log(document.getElementById('hacks').password);
}

function handleEnter(event) {
    console.log('handleEnter()')
    if (event.key === "Enter"){
        let hack = document.getElementById('hacks').value;

        if (hack === 'revealpart5'){
            impossibleq = document.getElementsByClassName('impossiblequestions')
            for (let i = 0; i < impossibleq.length; i++) {
                impossibleq[i].style.display = 'block';
            }
        
        }
    }
    


}

document.getElementById('submitpassword').addEventListener('click', adminprivileges)

let hacksinput = document.getElementById('hacks')

hacksinput.addEventListener('keydown', handleEnter)

//minigame
let gamescore = 0;
let highscore = 0;
let gameend = true;

const canvas = document.getElementById('gamecanvas');
const box = document.getElementById('box');
const gamescoredisplay = document.getElementById('gamescore');
const gamebutton = document.getElementById("gamestart")

box.addEventListener('click', hitBox)

function hitBox(event) {
    event.stopPropagation();
    console.log('hitbox')
    if (gameend === false) {
        gamescore ++;
        console.log(gamescore)
        gamescoredisplay.innerText = gamescore;
        moveBox();

    }

}

function moveBox() {
    console.log('movebox')
    if (gameend === false) {
        const x = Math.random() * 450;
        const y = Math.random() * 250;

        box.style.left = x + "px";
        box.style.top = y + "px";
    }
}

gamebutton.addEventListener('click', startgame)

function startgame() {
    console.log('start game');
    gamescore = 0;
    gamescoredisplay.textContent = gamescore;
    gameend = false;
    moveBox();
    startcountdown();
    
}

let countdown;
function startcountdown() {
    timeleft = 15;
    document.getElementById('timer').innerText = timeleft;
    countdown = setInterval(updatetimer, 1000);

}

function updatetimer() {
    timeleft --;
    if (timeleft < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerText = "Time's up"
        gameend = true;
        if (gamescore > highscore) {
            highscore = gamescore;
            document.getElementById('highscore').innerText = `High score: ${highscore}`;
        }
    } else {
        document.getElementById('timer').innerText = timeleft;
    }
    
}

canvas.addEventListener('click', deductscore)

function deductscore() {
    if (gameend === false) {
        gamescore --;
        gamescoredisplay.textContent = gamescore;
    }
}

const dialog = document.getElementById('dialog');

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}