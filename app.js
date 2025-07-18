// all these for home page

// auto select active page
const currentPath = window.location.pathname;
document.querySelectorAll('.the-link').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
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

  document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('scoreCircle');
    const score = parseInt(circle.getAttribute('data-score'), 10);
    const progressPath = document.getElementById('progressPath');
    const theBtn = document.getElementById("sweet-btn")
   

    let current = 0;
    const duration = 1500; // milliseconds
    const frameRate = 60;
    const totalFrames = Math.round(duration / (600 / frameRate));
    let frame = 0;

    const animate = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const currentScore = Math.round(progress * score);


      // Update stroke-dasharray
      progressPath.setAttribute('stroke-dasharray', `${currentScore}, 100`);



      // Update color dynamically
      let color = '#e74c3c'; // green default
      if (currentScore > 25 && currentScore < 50 ) color = '#e67e22'; // red
      else if (currentScore > 50 && currentScore < 75) color = '#f1c40f'; // yellow
      else if (currentScore >= 75) color = '#2ecc71';
      progressPath.style.stroke = color;



    //   butoon to display condition of the score
    theBtn.setAttribute('background-color', `${currentScore}, 100`);

    let colors = '#e74c3c'; // green default
      if (currentScore > 25 && currentScore < 50 ) colors = '#e67e22'; // red
      else if (currentScore > 50 && currentScore < 75) colors = '#f1c40f'; // yellow
      else if (currentScore >= 75) colors = '#2ecc71';
      theBtn.style.backgroundColor = colors



    // making the botton assume the color of the score
      let text = 'Poor'
       if (currentScore > 25 && currentScore < 50 ) text = 'Fair'; // red
      else if (currentScore > 50 && currentScore < 75) text = 'Good'; // yellow
      else if (currentScore >= 75) text = 'Excellent';
      theBtn.textContent = text

      // Update text
      document.getElementById("scoreValue").innerHTML = `${currentScore}`;

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  });


//  js for the charts
  const ctx = document.getElementById('trendChart').getContext('2d');

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Score",
      data: [65, 70, 60, 80, 75, 85, 90], // Replace dynamically if needed
      fill: false,
      borderColor: '#2ecc71',
      tension: 0.4,
      pointBackgroundColor: '#2ecc71',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#666', font: { size: 12 } },
        grid: { display: false },
        border: { display: false }
      },
      y: {
        min: 0,
        max: 100,
        ticks: {stepSize: 25, color: '#666', font: { size: 12 } },
        grid: { display: false },
        border: { display: false }
      }
    },
    plugins: {
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#333',
        borderColor: '#ddd',
        borderWidth: 1
      },
      legend: {
        display: false
      }
    }
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


//   log js


  


//   document.addEventListener('DOMContentLoaded', function () {
//   // Show only the food content on load
//   document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
//   document.getElementById('food').classList.add('active');
// });

// function showCategory(categoryId, buttonElement) {
//   // Hide all tab contents
//   document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

//   // Show selected tab content
//   document.getElementById(categoryId).classList.add('active');

//   // Remove active class from all buttons
//   document.querySelectorAll('.category-tabs .tab').forEach(tab => tab.classList.remove('active'));

//   // Add active class to clicked tab
//   buttonElement.classList.add('active');
// }
 // Run after the DOM is loaded
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










