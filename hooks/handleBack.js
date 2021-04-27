export const handleback = () =>
  document.querySelector("#back").addEventListener("click", (e) => {
    e.preventDefault();
    window.history.go(-1);
  });
