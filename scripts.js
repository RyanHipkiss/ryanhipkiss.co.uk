// Wait for the window to load before triggering the animation
window.onload = function() {
    const name = document.getElementById('name');
    const subhead = document.getElementById('subhead');
    name.classList.add('animate'); // Add the animate class to trigger the animation

    name.addEventListener('transitionend', () => {
        subhead.classList.add('fade-in')
    })

    subhead.addEventListener('transitionstart', () => {
        const svgElement = document.getElementById('pointDownFinger');
        let scale = 1;
        let growing = true;
        const maxScale = 1.2;
        const minScale = 0.8;
        const speed = 0.003;

        function animate() {
            if (growing) {
            scale += speed;
            if (scale >= maxScale) growing = false;
            } else {
            scale -= speed;
            if (scale <= minScale) growing = true;
            }

            svgElement.style.transform = `scale(${scale})`;
            svgElement.style.transformOrigin = "50% 50%"; // Ensure it scales from the center

            requestAnimationFrame(animate);
        }
        animate();
    })
};