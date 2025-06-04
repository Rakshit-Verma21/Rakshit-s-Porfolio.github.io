  
   const container = document.getElementById('welcome-container');
    const enterBtn = document.getElementById('enter-btn');
    enterBtn.addEventListener('click', () => {
      // Add fade-out animation class to container
      container.classList.add('fade-out');
      // Listen for animation end event to navigate
      container.addEventListener('animationend', () => {
        window.location.href = 'main.html';
      }, { once: true });
    });
     document.getElementById('enter-btn').addEventListener('click', function() {
      window.location.href = 'main.html'; // Navigate to index.html
    });
