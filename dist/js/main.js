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
  var totalImages = 8; // Change this based on your actual number of images
  var imagesPerPage = 2; // Change this based on how many images you want to show per page
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

   // Change the src attribute of all images with class 'gallery-img'
  var images = document.getElementsByClassName('gallery-img');
  for (var i = 0; i < images.length; i++) {
      images[i].src = `./img/nature/nature${pageNumber}.jpg`;
      images[i].alt = `./img/nature/nature ${pageNumber}`;
  }
}
function sendMessage(){
  // Get the values of the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (!validateName(name)) {
    alert("Name is invalid");
      name.focus();

  }
  if (!validateEmail(email)) {
      alert("Email is invalid");
 }
  else{alert(message)} 
}

function validateEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regex pattern
  return emailRegex.test(email);
}
function validateName(name) {
  // Regular expression for name validation
  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
  // Test the name against the regex pattern
  return nameRegex.test(name);
}
// Refresh page button
function refreshPage() {
  window.location.reload();
}

