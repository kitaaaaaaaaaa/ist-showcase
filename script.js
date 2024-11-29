// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

function toggleDetails(button) {
    const details = button.nextElementSibling;

    if (details.style.height && details.style.height !== "0px") {
        details.style.height = "0px"; // Collapse
        details.classList.remove("expanded"); // Remove expanded class
    } else {
        details.style.height = details.scrollHeight + "px"; // Expand
        details.classList.add("expanded"); // Add expanded class

        // Force reflow to ensure page adjusts
        details.offsetHeight; // Accessing offsetHeight forces reflow
    }
}


