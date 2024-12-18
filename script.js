  //DARK MOOD
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  
  // Toggle Navbar Visibility for Mobile
  function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Add animation to the summary component on load
document.addEventListener("DOMContentLoaded", function () {
  const summarySection = document.querySelector(".record-view-form");

  // Add a visible class to trigger fade-in animation
  setTimeout(() => {
      summarySection.style.opacity = 1;
      summarySection.style.transform = "translateY(0)";
  }, 300); // Delay for smoother animation
});

document.addEventListener("DOMContentLoaded", function () {
    const summary = document.getElementById("summary");
    summary.classList.add("visible");
});


// ANIMATION FOR ABOUT ME SECTION
document.addEventListener("DOMContentLoaded", function () {
  const summaryComponent = document.querySelector(".record-view-form");

  // Check if the element is visible in the viewport
  const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };

  const handleScroll = () => {
      if (isInViewport(summaryComponent)) {
          summaryComponent.classList.add("visible");
          window.removeEventListener("scroll", handleScroll); // Stop listening after animation triggers
      }
  };

  // Listen for scroll events to trigger the animation
  window.addEventListener("scroll", handleScroll);

  // Initial check in case the component is already in view
  handleScroll();
});


// Optional: Smooth scrolling for links (HOMEPGAE)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// SUMMARY COMPONENT
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('hidden');
  }
  
// EDUCATION
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".timeline-item");

  const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };

  const checkVisibility = () => {
      items.forEach((item) => {
          if (isInViewport(item)) {
              item.classList.add("visible");
          } else {
              item.classList.remove("visible");
          }
      });
  };

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check on page load
});

// SKILL PAGE
document.addEventListener("DOMContentLoaded", function () {
  const badges = document.querySelectorAll(".badge");

  badges.forEach((badge, index) => {
      setTimeout(() => {
          badge.style.opacity = 1;
          badge.style.transform = "translateY(0)";
      }, index * 100); // Stagger each badge by 100ms
  });
});

// JS FOR CERTIFICATION
document.addEventListener("DOMContentLoaded", function () {
  const certBoxes = document.querySelectorAll(".cert-box");

  certBoxes.forEach((box, index) => {
      setTimeout(() => {
          box.style.opacity = "1";
          box.style.transform = "translateY(0)";
      }, index * 200); // Stagger by 200ms
  });
});

// PROFESSIONAL EXPERIENCE COMPONENT
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline__item");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing once it's visible
          }
      });
  }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
  });

  timelineItems.forEach(item => {
      observer.observe(item);
  });
});
