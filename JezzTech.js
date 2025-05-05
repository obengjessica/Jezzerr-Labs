
document.getElementById("submitBtn").addEventListener("click", function() {
  const randomNum = Math.floor(100 + Math.random() * 9000);
  const siteNumber = `Your site number is ${randomNum}`;
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;

  if (!name || !email || !contact) {
    alert("Please fill in all your details");
    return;
  }

  alert(`Thank you ${name}, ${siteNumber}. Use the number to login next time.`);
  window.location.href = "JezzTechHome.html";
});

document.getElementById("oldsubmitBtn").addEventListener("click",function(){
  const name = document.getElementById("oldname").value;
  const siteNumber = document.getElementById("site").value;

  if(!name || !siteNumber){
    alert("Please fill in all your details");
    return;
  }
  alert(`Welcome back ${name}`);
  window.location.href="JezzTechHome.html";

});

document.getElementById("button-id").addEventListener("click",function(){
  const name = document.getElementById("name").value;
  const text = document.getElementById("case-Cus").value;
  const number = document.getElementById("contact").value;
  alert(`Dear ${name} we're very sorry for this incident. You've complain of " ${text} ".
    We'll contact you through your number " ${number}". Thanks for working with JEZZERR LABS`)
});







