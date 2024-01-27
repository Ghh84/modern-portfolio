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
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation for username (minimum length of 4 characters)
    if (username.length < 4) {
        alert("Username must be at least 4 characters long");
        return false;
    }
    // Regular expression for username validation (alphabets and numbers)
    var usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;

    // Basic validation for username
    if (!usernameRegex.test(username)) {
        alert("Username must contain at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }

    // Basic validation for password (minimum length of 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    if (password!=='hani1988' || username !=='Ghh2024') {
        alert("Password or username is not correct");
        return false;
    }
  
    // If both username and password pass validation, open new page in a new window/tab
    window.open("../dist/personal.html", "_blank"); // Change "welcome.html" to the URL of your new page
}
