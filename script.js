document.addEventListener('DOMContentLoaded', (event) => {
    // Select all news images
    const newsImages = document.querySelectorAll('.news-image');

    // Add click event listeners to each news image
    newsImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const descId = 'desc' + e.target.id.replace('news', '');
            const description = document.getElementById(descId);
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});
