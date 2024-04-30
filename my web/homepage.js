const imageUrls = [
    "web-pic/web-image.jpg",
    "web-pic/jude.jpg",
    "web-pic/maloz.jpg",
    "web-pic/polo.jpg"
];

const introImage = document.getElementById("intro-image");
let currentIndex = 0;

// Preload images
const images = [];
for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.src = imageUrls[i];
    images.push(img);
}

function changeImage() {
    introImage.style.backgroundImage = `url(${imageUrls[currentIndex]})`;

    currentIndex = (currentIndex + 1) % imageUrls.length;
}

changeImage(); // Initial call to change image
setInterval(changeImage, 2000); // Change image every 2 seconds
