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
