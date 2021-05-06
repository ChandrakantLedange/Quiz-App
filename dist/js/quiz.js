window.onload = function () {
  show_question(0);
};

//questions
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomly Access Memory",
      "Run Accept Memory",
      "None of these",
    ],
  },
  {
    id: 2,
    question: "What is the CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these",
    ],
  },
  {
    id: 3,
    question: "What is E-mail",
    answer: "Electronic Mail",
    options: [
      "Electrocity Mail",
      "Electro-magnet Mail",
      "Electronic Mail",
      "None of these",
    ],
  },
];

//submit form
function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_name"]["user_name"].value;

  //store user name
  sessionStorage.setItem("user_name", name);
  //   console.log(name);

  //jump to quiz page
  location.href = "quiz.html";
}

//next question
let question_count = 0;
let point = 0;
function next_question() {
  // get user click on option
  let user_answer = document.querySelector("li.option.active").innerHTML;

  // compaire answer
  if (user_answer == questions[question_count].answer) {
    point += 10;

    // store points at session storage.
    sessionStorage.setItem("points", point);
  }

  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "end.html";
    return;
  }

  question_count++;
  show_question(question_count);
}

//show questions function
function show_question(count) {
  let question = document.getElementById("questions");
  question.innerHTML = `
  <h2>Q${question_count + 1}. ${questions[count].question} <h2>
  <ul class="option_group">
  <li class="option">${questions[count].options[0]}</li>
  <li class="option">${questions[count].options[1]}</li>
  <li class="option">${questions[count].options[2]}</li>
  <li class="option">${questions[count].options[3]}</li>
</ul>
  `;
  toggleActive();
}

//option toggleActive
function toggleActive() {
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
