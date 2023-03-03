send = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "") {
    alert("Plesae enter your name!!!")
  }
  else if (email === "") {
    alert("Please enter your email!!!")
  }
  else if (message === "") {
    alert("Please enter your message!!!")
  }
  else {
    alert("Your Message was sent")
  }
}



prompt_name = () => {
  let person = prompt("Please enter your name:", "");
  if (person == null || person == "") {
    alert("Please enter your name!!!");
    window.location("index.html");
  } else {
    window.open("order.html");
  }

}

// register = () => {
//   let email = document.getElementById("register_email").value;
//   let username = document.getElementById("register_user").value;

// }

register = () => {
  let re_email = document.getElementById("register_email").value;
  let re_username = document.getElementById("register_user").value;
  let re_pw = document.getElementById("register_password").value;
  let re_rpw = document.getElementById("register_repassword").value;
  // let check = document.getElementById("check").value;


  if (re_email === "") {
    alert("Enter Email");
  }
  else if (re_username === "") {
    alert("Enter Username");
  }
  else if (re_pw === "") {
    alert("Enter Password");
  }
  else if (re_rpw === "") {
    alert("Rewrtie your password")
  }
  else if (re_pw !== re_rpw) {
    alert("Enter your password again");
  }
  else {
    alert("Register Successfully");
  }
}


login = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    alert("Login Successfully");
    window.open("student_info.html");
  }
  else {
    alert("Something wrong. Please try again!!!")
  }
}


function remove1() {
  document.getElementById("row1").remove();
}
function remove2() {
  document.getElementById("row2").remove();
}
function remove3() {
  document.getElementById("row3").remove();
}
function remove4() {
  document.getElementById("row4").remove();
}
function remove5(){
  document.getElementById("table").remove();
}
