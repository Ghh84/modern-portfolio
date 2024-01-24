// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

  // Number of images
  var totalImages = 4; // Change this based on your actual number of images
  var imagesPerPage = 1; // Change this based on how many images you want to show per page
  var totalPages = Math.ceil(totalImages / imagesPerPage);

  // Generate pagination dynamically
  var pagination = document.getElementById('pagination');
  for (var i = 1; i <= totalPages; i++) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="#" onclick="changePage(' + i + ')">' + i + '</a>';
      pagination.appendChild(li);
  }

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
  paginationItems[pageNumber-1].classList.add('active');

  // Change the src attribute of the image based on the pagination click
        var img = document.querySelector('.gallery-img');
        img.src = 'getImage.php?page=' + pageNumber;
        img.alt = 'Image ' + pageNumber;

  // Change the src attribute of all images with class 'gallery-img'
  var images = document.getElementsByClassName('gallery-img');
  for (var i = 0; i < images.length; i++) {
      images[i].src = `./img/nature/nature${pageNumber}.jpg`;
      images[i].alt = `./img/nature/nature ${pageNumber}`;
  }
}