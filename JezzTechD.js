// Script for web
document.getElementById("webBtn").addEventListener("click",function cameraRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("web-name").value;
  const email = document.getElementById("web-email").value;
  const contact = document.getElementById("web-contact").value;
  const description = document.getElementById("web-kind" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }
  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}. You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});


// Script for mobile
document.getElementById("mobileBtn").addEventListener("click",function cameraRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("mobile-name").value;
  const email = document.getElementById("mobile-email").value;
  const contact = document.getElementById("mobile-contact").value;
  const description = document.getElementById("mobile-kind" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});


// Script for UI/UX
document.getElementById("UI/UXBtn").addEventListener("click",function videoRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("UI/UX-name").value;
  const email = document.getElementById("UI/UX-email").value;
  const contact = document.getElementById("UI/UX-contact").value;
  const description = document.getElementById("UI/UX-des" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});

// Script for Graphic Design
document.getElementById("graphicBtn").addEventListener("click",function videoRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("graphic-name").value;
  const email = document.getElementById("graphic-email").value;
  const contact = document.getElementById("graphic-contact").value;
  const description = document.getElementById("graphic-des" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});


// Script for Video
document.getElementById("videoBtn").addEventListener("click",function videoRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("video-name").value;
  const email = document.getElementById("video-email").value;
  const contact = document.getElementById("video-contact").value;
  const description = document.getElementById("video-kind" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});

// Script for Camera services
document.getElementById("camera-head").addEventListener("click",function cameraRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("camera-name").value;
  const email = document.getElementById("camera-email").value;
  const contact = document.getElementById("camera-contact").value;
  const description = document.getElementById("camera-kind" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});

// Script for 3D-animation creation
document.getElementById("3d-head").addEventListener("click", function annimationRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("animation-name").value;
  const email = document.getElementById("animation-email").value;
  const contact = document.getElementById("animation-contact").value;
  const description = document.getElementById("animation-kind" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});

// Script for T-shirt Design
document.getElementById("tshirtBtn").addEventListener("click",function cameraRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("shirt-name").value;
  const email = document.getElementById("shirt-email").value;
  const contact = document.getElementById("shirt-contact").value;
  const description = document.getElementById("shirt-des" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});

// Script for T-shirt Sales 
document.getElementById("sale-head").addEventListener("click",function saleRedirectToWhatsApp(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Get input values
  const name = document.getElementById("sale-name").value;
  const email = document.getElementById("sale-email").value;
  const contact = document.getElementById("sale-contact").value;
  const description = document.getElementById("sale-des" ).value;

  // Checking validations 
  if(!name || !email || !contact || !description){
    alert("Please fill in all your details");
    return;
  }

  // Construct WhatsApp message
  const message = `Hello, my name is ${name}. I want to order ${description}.You can call me on ${contact}`;

  // Replace with your WhatsApp number (no + or dashes)
  const phoneNumber = "233591286053"; 

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
});

document.getElementById("exit").addEventListener("click",function(){
  window.location.href="JezzTech.html";
 alert("Thanks for navigating through our site...Look Forward seeing You again.Bye");
 
});

