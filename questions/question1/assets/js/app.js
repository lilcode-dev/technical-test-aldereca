const questions = document.querySelectorAll(".question");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => e.preventDefault());

const selectOptions = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
};
document.querySelector("#next").addEventListener("click", (e) => {
  e.preventDefault();
  let inputSelect;
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    if (input.checked) {
      inputSelect = input.previousSibling.textContent.trim();
    }
  }
  console.log(inputSelect);
  if (inputSelect == undefined) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe seleccionar una opcion",
    });
  } else {
    selectOptions.question1 = inputSelect;
    console.log(selectOptions);

    localStorage.setItem("selects", JSON.stringify(selectOptions));
    console.log(inputs);
    window.location.href = "../question2/";
  }
});


document.querySelector("#back").addEventListener("click", (e) => {
  e.preventDefault();
  window.history.go(-1);
});