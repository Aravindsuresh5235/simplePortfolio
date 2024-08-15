document.addEventListener('DOMContentLoaded', function() {
    // Details to show for each social icon
    const details = {
      'github-icon': 'GitHub Profile: https://github.com/Aravindsuresh5235',
      'linkedin-icon': 'LinkedIn Profile: https://linkedin.com/in/aravind-suresh-015b36215',
      'mail-icon': 'Email: aravindsuresh5235@gmail.com'
    };

    // Function to display details
    function showDetails(info) {
      alert(info);
    }

    // Adding event listeners to social icons
    document.getElementById('github-icon').addEventListener('click', function(event) {
      event.preventDefault();
      showDetails(details['github-icon']);
    });

    document.getElementById('linkedin-icon').addEventListener('click', function(event) {
      event.preventDefault();
      showDetails(details['linkedin-icon']);
    });

    document.getElementById('mail-icon').addEventListener('click', function(event) {
      event.preventDefault();
      showDetails(details['mail-icon']);
    });
});