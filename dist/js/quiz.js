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
function next_question() {
  console.log("works");
}
