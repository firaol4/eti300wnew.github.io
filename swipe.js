let homes = [];
let index = 0;
let imgIndex = 0;

fetch("http://98.92.43.134/homes.php")
  .then(res => res.json())
  .then(data => {
    homes = data;
    showHome();
  });

function getImageUrl(filename) {
  return `/images/${filename}`;
}

function showHome() {
  const home = homes[index];

  document.getElementById("home-address").textContent = home.address;
  document.getElementById("home-price").textContent = "$" + home.price.toLocaleString();

  const currentImage = home.images[imgIndex];
  document.getElementById("home-image").src = getImageUrl(currentImage);
}

function nextImage() {
  imgIndex = (imgIndex + 1) % homes[index].images.length;
  showHome();
}

function prevImage() {
  imgIndex = (imgIndex - 1 + homes[index].images.length) % homes[index].images.length;
  showHome();
}

function nextHome() {
  index = (index + 1) % homes.length;
  imgIndex = 0;
  showHome();
}

document.getElementById("like-btn").onclick = () => {
  nextHome();
};

document.getElementById("dislike-btn").onclick = () => {
  nextHome();
};
