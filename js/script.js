// Get the Gmail icon and the text element
const gmailIcon = document.querySelector('.gmail-icon');
const gmailText = document.getElementById('gmail-text');

// Add click event listener to the Gmail icon
gmailIcon.addEventListener('click', function() {
  // Toggle the visibility of the text
  gmailText.style.display = (gmailText.style.display === 'none' || gmailText.style.display === '') ? 'block' : 'none';
});