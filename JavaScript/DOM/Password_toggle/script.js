var form = document.createElement("form");
form.style.width = "500px";
form.style.margin = "12% auto";
form.style.padding = "50px 0";
form.style.backgroundColor = "rgba(0,0,0,0.8)";
form.style.boxShadow = "0 0 20px 2px rgba (0,0,0,0.5)";
document.body.appendChild(form);


var heading =document.createElement('h1');
heading.innerHTML="Password";
heading.style.textDecoration = "none";
heading.style.marginLeft = "30px";
heading.style.color = "#2196F3";
form.appendChild(heading);


var password = document.createElement("input");
password.setAttribute("placeholder", "Password");
password.setAttribute("type", "password");
password.setAttribute("required", "");
form.appendChild(password);
password.style.padding = "15px auto";
password.style.width = "90%";
password.style.marginBottom = "10px";
password.style.marginLeft="30px";

var icon = document.createElement("i");
icon.className = "fa fa-eye-slash";
icon.addEventListener("click", function (event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.className = "fa fa-eye";
  } else {
    passwordInput.type = "password";
    icon.className = "fa fa-eye-slash";
  }
});

var forgotAndNext = document.createElement("div");
form.appendChild(forgotAndNext);

var forgotPassword = document.createElement("a");
forgotPassword.innerHTML = "Forgot Password?";
forgotAndNext.appendChild(forgotPassword);
forgotPassword.setAttribute("href", "#");
forgotPassword.style.textDecoration = "none";
forgotPassword.style.marginLeft = "30px";
forgotPassword.style.color = "#2196F3";
forgotPassword.addEventListener('mouseover', function(event) {
    forgotPassword.style.color = "#FFFFE0 ";
})
forgotPassword.addEventListener('mouseout', function(event) {
    forgotPassword.style.color = "#2196F3";
})

var next = document.createElement("button");
next.innerHTML = "Next";
forgotAndNext.appendChild(next);
next.style.float = "right";
next.style.marginRight ="10px";
next.style.padding = "5px 25px";
next.style.background = "transparent";
next.style.borderRadius = "5px";
next.style.color = "white";
next.addEventListener('mouseover', function(event) {
    next.style.background = "#2196F3";
    next.style.borderColor = "1px solid #fff";
})
next.addEventListener('mouseout', function(event) {
    next.style.backgroundColor = "transparent";
})


