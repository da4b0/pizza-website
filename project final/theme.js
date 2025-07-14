document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

   
  let button = document.getElementById("toggle-theme");
  if (!button) {
    button = document.createElement("button");
    button.id = "toggle-theme";
    button.innerText = "theme switcher";
    body.appendChild(button);
  }

   
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

 
  button.addEventListener("click", function () {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
