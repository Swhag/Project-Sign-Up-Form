const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const submitBtn = document.getElementById("submit_btn");
const errorPrompt = document.getElementById("message");

password1.addEventListener("input", () => {
  password = password1.value;
  if (password === c_password || password1.length >= 1) {
    (password1.style.border = ""), (password2.style.border = "");
  } else
    (password1.style.border = "1px solid red"),
      (password2.style.border = "1px solid red");
});

password2.addEventListener("input", () => {
  c_password = password2.value;
  if (password === c_password || password1.length >= 1) {
    (password1.style.border = ""), (password2.style.border = "");
  } else
    (password1.style.border = "1px solid red"),
      (password2.style.border = "1px solid red");
});

submitBtn.addEventListener("click", (e) => {
  let message;
  if (password.length <= 8 && c_password.length <= 8) {
    message = "* Password must be 8 characters or longer";
    e.preventDefault();
  }
  if (password !== c_password) {
    message = "* Passwords do not match";
    e.preventDefault();
  }
  errorPrompt.textContent = message;
});
