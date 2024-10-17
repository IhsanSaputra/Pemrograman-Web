const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validationName() && validationEmail() && validationPass()) {
    alert("Form submitted successfully");
  }
});

function validationName() {
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    nameError.innerHTML = "Name is required";
    alert("Please enter your name");
    return false;
  }

  nameError.innerHTML = "";
  return true;
}

function validationEmail() {
  let email = document.getElementById("email").value.trim();
  if (email === "") {
    emailError.innerHTML = "Email is required";
    alert("Please enter your email");
    return false;
  }
  if (!email.includes("@")) {
    emailError.innerHTML = "Email must contain @";
    alert("Email must contain @");
    return false;
  }

  emailError.innerHTML = "";
  return true;
}

function validationPass() {
  let pass = document.getElementById("password").value;
  if (pass.length < 8) {
    passError.innerHTML = "Password must be at least 8 characters long";
    alert("Password must be at least 8 characters long");
    return false;
  }

  passError.innerHTML = "";
  return true;
}
