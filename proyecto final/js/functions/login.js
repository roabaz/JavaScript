let emailData = "";
let passwordData = "";

function login() {
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");

  email.addEventListener("input", (e) => {
    emailData = e.target.value;
    console.log(emailData);
  });
  password.addEventListener("input", (e) => {
    passwordData = e.target.value;
    console.log(passwordData);
  });

  let data = JSON.parse(localStorage.getItem("users")) || [];

  if (emailData && passwordData){
  data.forEach((element) => {
    if ((element.email === emailData) && (atob(element.password) === passwordData) ){
      window.location.href = "admin.html";
    }else{
      alert("contrasenia o email incorrecto.");
    }
  });
}

}

login();

