let Menu_open = document.querySelector(".menu_open");
let Mobile_menu = document.querySelector(".mobile_menu");

Menu_open.onclick = function () {
  Mobile_menu.classList.toggle("mobile_menu_active");
  Menu_open.classList.toggle("fa-xmark");
};
