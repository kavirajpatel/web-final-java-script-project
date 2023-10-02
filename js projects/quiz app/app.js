const quizData = [
    {
        "id": 1,
        "answer": 3,
        "question": "Which was not one of Voldemort's Horcruxes?",
        "options": [
            "Harry",
            "Nagini",
            "Helga's Diadem",
            "Tom Riddle's Diary"
        ]
    },
    {
        "id": 2,
        "answer": 1,
        "question": "Which of these are not one of Hagrid's many pets?",
        "options": [
            "Grawp",
            "Fluffy",
            "Aragog",
            "Noberta"
        ]
    },
    {
        "id": 3,
        "answer": 3,
        "question": "Which class did Severus Snape always want to teach?",
        "options": [
            "Potions",
            "Charms",
            "Defense Against Dark Arts",
            "Transfiguration"
        ]
    },
    {
        "id": 4,
        "answer": 3,
        "question": "Which Hogwarts house did Moaning Myrtle belong in?",
        "options": [
            "Gryffindor",
            "Slytherin",
            "Ravenclaw",
            "Hufflepuff"
        ]
    },
    {
        "id": 5,
        "answer": 2,
        "question": "What class did Neville end up teaching at Hogwarts?",
        "options": [
            "Astronomy",
            "Herbology",
            "Charms",
            "Muggle Studies"
        ]
    }
];

const quizContainer = document.querySelector('.quiz-container');
const submitButton = document.getElementById('submit-button');
const scoreDisplay = document.querySelector('.score');

let score = 0;

function loadQuestions(questions) {
    questions.forEach(function (question) {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <h2>${question.question}</h2>
            <form>
                ${question.options.map(function (option, optionIndex) {
                    return `
                        <label>
                            <input type="radio" name="q${question.id}" value="${optionIndex + 1}">${option}
                        </label>
                    `;
                }).join('')}
            </form>
        `;
        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(document.createElement('hr'));
    });
}

function updateScore() {
    score = 0;
    quizData.forEach(function (question) {
        const selectedOptionIndex = parseInt(document.querySelector(`input[name="q${question.id}"]:checked`).value);
        if (!isNaN(selectedOptionIndex)) {
            if (selectedOptionIndex === question.answer) {
                score++;
            }
        }
    });
    scoreDisplay.textContent = score + '/' + quizData.length;
}

loadQuestions(quizData);

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    updateScore();
});