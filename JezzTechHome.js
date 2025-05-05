document.getElementById("exploreBtn").addEventListener("click",function(){
  alert("Enjoy as you explore our core services.");
  window.location.href="JezzTechS.html";
});

document.getElementById("service1").addEventListener("click", function() {
  alert("Thanks for choosing us.. Enter every detail asked and your demand will be delivered");
  window.location.href="JezzTechD.html";
});

document.getElementById("service1").addEventListener("click", function() {
  alert("Thanks for choosing us.. Enter every detail asked and your demand will be delivered");
  window.location.href="JezzTechD.html";
});

document.getElementById("service2").addEventListener("click", function() {
  alert("Here's all our contact info; Feel free to reach us at anytime");
  window.location.href="JezzTechC.html";
});

document.getElementById("exploreBtn").addEventListener("click", function () {
  const body = document.body;
  body.classList.add("fade-out");

  // Wait for the animation to finish (1s), then redirect
  setTimeout(() => {
    window.location.href = "JezzTechS.html";
  }, 1000);
});