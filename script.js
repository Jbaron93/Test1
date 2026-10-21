document.getElementById("quoteBtn").addEventListener("click", function(){

alert("Thank you! Please call us or email us for your free quotation.");

});

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
