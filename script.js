const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1 ) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is Matt's highest finishing place?",
        answers: [
            { text: "1st", correct: false },
            { text: "3rd", correct: true },
            { text: "4th", correct: false },
            { text: "Last place", correct: false }
        ]
    },
    {
        question: "Who has had the worst record for any season?",
        answers: [
            { text: "Will", correct: false },
            { text: "Vernon", correct: false },
            { text: "Hunter", correct: true },
            { text: "Erik", correct: false }
        ]
        // choice1: "Will",
        // choice2: "Hunter",
        // choice3: "Vernon",
        // choice4: "Erik",
        // corret: "Hunter"
    },
    {
        question: "Who has made the most transactions in league history?",
        answers: [
            { text: "Chris", correct: false },
            { text: "Will", correct: false },
            { text: "Jaron", correct: true },
            { text: "Other", correct: false }
        ]
        // choice1: "Chris",
        // choice2: "Will",
        // choice3: "Jaron",
        // choice4: "Other",
        // corret: "Jaron"
    },
    {
        question: "Who has the most 2nd place finishes?",
        answers: [
            { text: "Hunter", correct: true },
            { text: "Will", correct: false },
            { text: "Jaron", correct: false },
            { text: "All", correct: false }
        ]

        // choice1: "Hunter",
        // choice2: "Will",
        // choice3: "Jaron",
        // choice4: "All",
        // corret: "All"
    },
    {
        question: "Why does Jaron need so many transactions?",
        answers: [
            { text: "We dont know", correct: false },
            { text: "The limit does not exist", correct: false },
            { text: "He wants to ruin the waiver wire", correct: false },
            { text: "He is just confused", correct: true }
        ]
        // choice1: "We dont know",
        // choice2: "The limit does not exist",
        // choice3: "He wants to ruin the waiver wire",
        // choice4: "He is just confused",
        // corret: "He is just confused"
    },
    {
        question: "Who was the first running back taken in our 2015 draft?",
        answers: [
            { text: "Adrian Peterson", correct: false },
            { text: "Matt Forte", correct: false },
            { text: "Shady McCoy", correct: true },
            { text: "DeMarco Murray", correct: false }
        ]
        // choice1: "Adrian Peterson",
        // choice2: "Matt Forte",
        // choice3: "Shady McCoy",
        // choice4: "DeMarco Murray",
        // corret: "Shady McCoy"
    },
]