let open = document.getElementById("open-menu");
let close = document.getElementById("close-menu");
let arrowDown = document.getElementById("arrow-down");
let arrowUp = document.getElementById("arrow-up");
let openMenu = true;
let openDropDown = true;
let dropdown = document.getElementById("navbarDropdown2");
let dropdownMenu = document.getElementById("navbarDropdown2Menu");

if (openMenu === true) {
  close.style.display = "none";
} else {
  open.style.display = "none";
  close.style.display = "block";
}

open.addEventListener("click", function () {
  openMenu = !openMenu;

  if (openMenu === true) {
    close.style.display = "none";
  } else {
    open.style.display = "none";
    close.style.display = "block";
  }
});
close.addEventListener("click", function () {
  openMenu = !openMenu;

  if (openMenu === true) {
    close.style.display = "none";
    open.style.display = "block";
  } else {
    open.style.display = "none";
    close.style.display = "block";
  }
});

//
if (openDropDown === true) {
  arrowUp.style.display = "none";
  arrowDown.style.display = "block";
} else {
  arrowUp.style.display = "block";
  arrowDown.style.display = "none";
}

arrowDown.addEventListener("click", function () {
  openDropDown = !openDropDown;
  console.log(openDropDown);
  if (openDropDown === true) {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    dropdown.classList.toggle("show");
    dropdownMenu.classList.toggle("show");
  }
});

arrowUp.addEventListener("click", function () {
  openDropDown = !openDropDown;
  if (openDropDown !== true) {
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
  }
});
