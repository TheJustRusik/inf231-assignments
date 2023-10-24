// Get all elements with a "tooltip-trigger" class
const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

// Iterate through the elements and add event listeners
tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
});

// Function to show the tooltip
function showTooltip(event) {
    const tooltipContent = event.target.getAttribute('data-tooltip');
    const tooltip = event.target.nextElementSibling;
    tooltip.textContent = tooltipContent;
    tooltip.style.visibility = 'visible';
}

// Function to hide the tooltip
function hideTooltip(event) {
    const tooltip = event.target.nextElementSibling;
    tooltip.style.visibility = 'hidden';
}
