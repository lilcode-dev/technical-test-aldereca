const selectOptions = JSON.parse(localStorage.getItem("selects"));
document.querySelector("#next").addEventListener("click", (e) => {
  e.preventDefault();
  let inputSelect;
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    if (input.checked) {
      inputSelect = input.previousSibling.textContent.trim();
    }
  }

  if (inputSelect == undefined) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe seleccionar una opcion",
    });
  } else {
    selectOptions.question3 = inputSelect;

    localStorage.setItem("selects", JSON.stringify(selectOptions));
    window.location.href = "../question4/";
  }
});

document.querySelector("#back").addEventListener("click", (e) => {
  e.preventDefault();
  window.history.go(-1);
});
