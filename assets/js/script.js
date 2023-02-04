
// - Question container variables -

let questionsContainer = document.getElementById ("questions-container");
let questionTitle = document.getElementById("question-title");
let correctAnswer = "answer";
let availibleOptions = "options"


// - Display questions function -

function displayQuestion(questionsBox) {
    for(let i = 0; i < question.lenght; i++) {
        document.getElementById(`question-title${i}`).innerHTML = questionsBox[i].question[i];
    let randomQuestions = Math.floor(Math.random() * question.lenght);
        questionTitle.innerHTML = question[randomQuestions.question];
    };
    for(let i = 0; i < 4; i++) {
        document.getElementById(`option${i}`).innerHTML = questionsBox[i].options[i];
    }
}
displayQuestion(questionsBox);

// - Function to display next question -

$(".option").click(function() {
    next(randomQuestions);
})






