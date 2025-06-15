// Toggle Skills Section
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleSkills');
  const skillsList = document.getElementById('skillsList');

  toggleBtn.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
      skillsList.style.display = 'flex';
    } else {
      skillsList.style.display = 'none';
    }
  });

  // Dark Mode Toggle
  const darkModeBtn = document.getElementById('darkModeToggle');
  darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });

  // Welcome Alert
  alert('Welcome to my portfolio! 🎉');
});
