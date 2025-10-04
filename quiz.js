let wrongCountMCQ = 0
function QuestionSwitch(number) {
    questions = document.getElementsByClassName("Question")
    solutions = document.getElementsByClassName("solution")
    for (i = 0; i < questions.length; i++) {
        questions[i].hidden = "true"
    }
    for (i = 0; i < questions.length; i++) {
        questions[i].hidden = "true"
    }
    document.getElementById(`Q${number}`).removeAttribute('hidden')
    for (i = 0; i < solutions.length; i++) {
        solutions[i].hidden = "true"
    }
}
function wrong(questionNumber, letter) {
    wrongCountMCQ++;
    buttons = document.getElementsByClassName(`Q${questionNumber}Button`);
    document.getElementById(`${questionNumber}${letter}`).style.backgroundColor = "red";
    document.getElementById(`${questionNumber}${letter}`).disabled = "true";
    if (wrongCountMCQ == 2) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = "true"
        }
        document.getElementsByClassName("right")[0].style.backgroundColor = "#00fa04"
        document.getElementById(`Q${questionNumber}Sol`).removeAttribute('hidden');
        wrongCountMCQ = 0;
    }
}
function right(questionNumber, letter) {
    buttons = document.getElementsByClassName(`Q${questionNumber}Button`);
    document.getElementsByClassName("right")[questionNumber - 1].style.backgroundColor = "#00fa04"
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = "true"
    }
    document.getElementById(`Q${questionNumber}Sol`).removeAttribute('hidden');
}
