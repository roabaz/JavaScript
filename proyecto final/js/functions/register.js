let emailData = "";
let passwordData = "";
let id = 0;
let exist = false;
function register() {
    let users = [];
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");
  let now = new Date();
  id = getRandomInt(9999);
  email.addEventListener("input", (e) => {
    emailData = e.target.value;
  });
  password.addEventListener("input", (e) => {
    passwordData = btoa(e.target.value);
  });
  exist = users.some((prod) => emailData === prod.email);

  console.log(exist);

  if (emailData && passwordData) {
    if (!exist) {
      users.push(new User(id, emailData, passwordData, now));
    }
  }

  localStorage.setItem("users", JSON.stringify(users));

}

register();


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
