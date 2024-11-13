// Optional JavaScript code for interactive features (if needed in future)
// Currently, no JS functionality is implemented, but you can add event listeners here if needed.

// For example, for smooth scrolling between sections:

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    });
  });
  
  
// Add any interactivity or animations here (if needed).
// Add interactivity or further enhancement here if needed
// For example, a simple scroll effect or any interactive elements can be added


document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Page Loaded");
  });
  


// Initialize EmailJS
(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your user ID
})();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Send the email
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
          alert('Your message has been sent successfully!');
      }, function(error) {
          alert('Failed to send your message. Please try again later.');
          console.error('Error:', error);
      });
});