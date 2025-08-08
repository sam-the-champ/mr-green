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
