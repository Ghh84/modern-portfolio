// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
function changePage(pageNumber) {
  var paginationItems = document.getElementById('pagination').getElementsByTagName('li');
  
  // Remove 'active' class from all pagination items
  for (var i = 0; i < paginationItems.length; i++) {
      paginationItems[i].classList.remove('active');
  }

  // Add 'active' class to the clicked pagination item
  paginationItems[pageNumber - 1].classList.add('active');

  // Change the src attribute of all images with class 'gallery-img'
  var images = document.getElementsByClassName('gallery-img');
  for (var i = 0; i < images.length; i++) {
      images[i].src = `./img/nature/nature${pageNumber}.jpg`;
      images[i].alt = `./img/nature/nature ${pageNumber}`;
  }
}