// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

function toggleDetails(button) {
    const details = button.nextElementSibling;

    if (details.style.height && details.style.height !== "0px") {
        details.style.height = "0px"; // Collapse
        details.classList.remove("expanded");
    } else {
        details.style.height = details.scrollHeight + "px"; // Expand
        details.classList.add("expanded");
    }

    // Update Locomotive Scroll to account for new container height
    scroll.update();
}

const container = document.querySelector('[data-scroll-container]');

// Observe changes to container height
const resizeObserver = new ResizeObserver(() => {
    scroll.update(); // Update Locomotive Scroll whenever the container's size changes
});

resizeObserver.observe(container);

// Add smooth scroll behavior for the scroll-down icon
document.querySelector('.scroll-down').addEventListener('click', () => {
    // Scroll to the next section (this scrolls the container itself)
    scroll.scrollTo('.timeline-container', {
      offset: 0, // You can adjust this value to customize the scroll position
      duration: 1000, // Smooth scroll duration in milliseconds
      easing: [0.25, 0.00, 0.35, 1.00] // Easing for smoothness
    });
  });


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});
