const form= document.getElementById('contactus');
 form.addEventListener('submit', function(e) {
      e.preventDefault(); 
      alert("Thank you! Your message has been sent.");
      form.reset();
 });