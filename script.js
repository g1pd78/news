document.addEventListener('DOMContentLoaded', (event) => {
    const newsImages = document.querySelectorAll('.news-image');
    const popup = document.getElementById('popup');
    const popupDescription = document.getElementById('popup-description');
    const closeButton = document.querySelector('.close-button');

    const descriptions = {
        'desc1': 'This is the description of News 1. Click the image to see more details.',
        'desc2': 'This is the description of News 2. Click the image to see more details.',
        // Add more descriptions as needed
    };

    newsImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const descKey = e.target.getAttribute('data-desc');
            popupDescription.innerText = descriptions[descKey];
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
