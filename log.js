 // Run after the DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');

    // Show only food tab content
    const foodTab = document.getElementById('food');
    foodTab.style.display = 'block';
    foodTab.classList.add('active');
  });

  function showCategory(categoryId, buttonElement) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
      tab.classList.remove('active');
    });

    // Remove active from all buttons
    document.querySelectorAll('.category-tabs .tab').forEach(btn => {
      btn.classList.remove('active');
    });

    // Show selected content
    const activeTab = document.getElementById(categoryId);
    activeTab.style.display = 'block';
    activeTab.classList.add('active');

    // Mark button as active
    buttonElement.classList.add('active');
  }

