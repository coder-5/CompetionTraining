let answered = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let wrongCountMCQ = 0;
function QuestionSwitch(number) {
  questions = document.getElementsByClassName("Question");
  solutions = document.getElementsByClassName("solution");
  for (i = 0; i < questions.length; i++) {
    questions[i].hidden = "true";
  }
  for (i = 0; i < questions.length; i++) {
    questions[i].hidden = "true";
  }
  document.getElementById(`Q${number}`).removeAttribute("hidden");
  for (i = 0; i < solutions.length; i++) {
    solutions[i].hidden = "true";
  }
  for (i = 0; i < answered.length; i++) {
    if (answered[i] == true && i == number - 1) {
      solutions[i].removeAttribute("hidden");
    }
  }
}
function wrong(questionNumber, letter) {
  wrongCountMCQ++;
  buttons = document.getElementsByClassName(`Q${questionNumber}Button`);
  document.getElementById(`${questionNumber}${letter}`).style.backgroundColor =
    "red";
  document.getElementById(`${questionNumber}${letter}`).disabled = "true";
  if (wrongCountMCQ == 2) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = "true";
    }
    document.getElementsByClassName("right")[
      questionNumber - 1
    ].style.backgroundColor = "#00fa04";
    document.getElementById(`Q${questionNumber}Sol`).removeAttribute("hidden");
    wrongCountMCQ = 0;
    answered[questionNumber - 1] = true;
  }
}
function right(questionNumber, letter) {
  buttons = document.getElementsByClassName(`Q${questionNumber}Button`);
  document.getElementsByClassName("right")[
    questionNumber - 1
  ].style.backgroundColor = "#00fa04";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = "true";
  }
  document.getElementById(`Q${questionNumber}Sol`).removeAttribute("hidden");
  answered[questionNumber - 1] = true;
}
