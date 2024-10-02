// Wait for the window to load before triggering the animation
window.onload = function() {
    const name = document.getElementById('name');
    const subhead = document.getElementById('subhead');
    name.classList.add('animate'); // Add the animate class to trigger the animation

    name.addEventListener('transitionend', () => {
        subhead.classList.add('fade-in')
    })
};