function register() {
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");
  const message = document.querySelector("#message");
  let now = new Date();
  id = getRandomInt(9999);
  email.addEventListener("change", (e) => {
    emailData = e.target.value;
  });
  password.addEventListener("change", (e) => {
    passwordData = btoa(e.target.value);
  });
  exist = users.some((prod) => emailData === prod.email);
  console.log(exist);
  message.innerHTML = "";
  if (emailData != "" && passwordData != "" && exist === false) {
    users.push(new User(id, emailData, passwordData, now));
    message.innerHTML += `<p class="alert alert-success"> Tu cuenta fue creada exitosamente!!!</p>`;
  } else if (exist) {
    message.innerHTML += `<p class="alert alert-warning"> Email registrado, proporciona otro</p>`;
  }

  localStorage.setItem("users", JSON.stringify(users));
}

register();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
