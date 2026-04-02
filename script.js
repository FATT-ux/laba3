const mainImg = document.getElementById("mainImg");
const galleryContainer = document.getElementById("galleryContainer");

document.addEventListener('click', (event) => { 
    const thumbnail = event.target.closest('.car-gallery-card');
    
    if (thumbnail) {
        const smallImg = thumbnail.querySelector('.gallery-img');
        mainImg.src = smallImg.src;
    }
});