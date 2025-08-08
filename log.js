// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');

// Check saved theme or system preference on page load
(function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
  } else {
    // No saved theme — detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙 ';
    }
  }
})();

// Toggle theme and save preference
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
document.addEventListener("DOMContentLoaded", function () {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
      tab.classList.remove('active');
    });

    // Show only food tab content
    const foodTab = document.getElementById('food');
    foodTab.style.display = 'block';
    foodTab.classList.add('active');

    // Remove .active class from all tab buttons (just to be safe)
    document.querySelectorAll('.category-tabs .tab').forEach(btn => {
      btn.classList.remove('active');
    });

    // Add .active to the Food button
 document.getElementById('foodBtn').classList.add('active');
  });

  function showCategory(categoryId, buttonElement) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
      tab.classList.remove('active');
    });

    document.querySelectorAll('.category-tabs .tab').forEach(btn => {
      btn.classList.remove('active');
    });

    const activeTab = document.getElementById(categoryId);
    activeTab.style.display = 'block';
    activeTab.classList.add('active');

    buttonElement.classList.add('active');
  }
