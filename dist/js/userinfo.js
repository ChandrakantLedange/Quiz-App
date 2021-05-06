let user = sessionStorage.getItem("user_name");
let points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = user;
document.querySelector(".point").innerHTML = points;
document.querySelector(".time").innerHTML = user_time;
