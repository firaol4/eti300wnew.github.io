let homes = [];
let index = 0;
let imgIndex = 0;

fetch("http://98.92.43.134/api/getHomes.php")
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

  document.getElementById("home-image").src = home.image_url;
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
