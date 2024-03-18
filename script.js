// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// For Hire Me btn to render with contact me form
document.getElementById('hire-me-btn').addEventListener('click', function() {
  // Scroll to the contact form section
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  
});

// Clear contact form 
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform form validation
  var name = document.getElementById('clientname').value;
  var email = document.getElementById('clientemail').value;
  var phone = document.getElementById('clientphone').value;
  var enquiry = document.getElementById('clientenquiry').value;
  var isClient = document.getElementById('isclient').checked;

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Perform additional validation as needed
  
  // If all validations pass, submit the form
  // Replace the alert with actual form submission code
  alert('Form submitted successfully');
  
  // Reset the form fields
  document.getElementById('clientname').value = '';
  document.getElementById('clientemail').value = '';
  document.getElementById('clientphone').value = '';
  document.getElementById('clientenquiry').value = '';
  document.getElementById('isclient').checked = false;
});
