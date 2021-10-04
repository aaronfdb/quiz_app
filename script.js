const quizData = [
    {
        question: 'Who did Courtney Act play in season 6’s Snatch Game?',
        a: 'Julia Child',
        b: 'Fran Drescher',
        c: 'Kim Kardashian',
        d: 'Britney Spears',
        correct: 'b'
    },
    {
        question: 'Who was first to be eliminated in season 9?',
        a: 'Charlie Hides',
        b: 'Bebe Zahara Benet',
        c: 'Latrice Royale',
        d: 'Jinx Monsoon',
        correct: 'a'
    },
    {
        question: 'How many times has Shangela competed?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'd'
    },
    {
        question: 'What season did Michelle start as a judge?',
        a: '2',
        b: '3',
        c: '4',
        d: '1',
        correct: 'b'
    },
    {
        question: 'Who accused Alyssa Edwards of having back rolls?',
        a: 'Detox',
        b: 'Coco Montrese',
        c: 'Jade Jolie',
        d: 'Alaska',
        correct: 'c'
    },
    { 
        question: 'Who is the only queen to ever have been disqualified from RuPaul’s Drag Race?',
        a: 'Kelly Mantle',
        b: 'Naysha Lopez',
        c: 'Adore Delano',
        d: 'Willam Belli',
        correct: 'd'
    },
    {
        question: 'What song did Season 9 winner Sasha Velour lip sync to in which she revealed rose petals hidden in her gloves and wig?',
        a: 'It’s Not Right But It’s Okay – Whitney Houston',
        b: 'So Emotional – Whitney Houston',
        c: 'Stronger – Britney Spears',
        d: 'Tell It To My Heart – Taylor Dayne',
        correct: 'b'
    }
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById
("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});


