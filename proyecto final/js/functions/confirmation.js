function redirect(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
redirect(5000).then(() => {
  window.location.href = "index.html";
});
