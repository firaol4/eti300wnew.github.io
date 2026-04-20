let homes = [];
let index = 0;

fetch("http://44.223.40.149/api/getHomes.php")
  .then(res => res.json())
  .then(data => {
    homes = data;
    showHome();
  });

function showHome() {
  if (!homes.length) return;

  const home = homes[index];

  document.getElementById("home-address").textContent = home.address;
  document.getElementById("home-price").textContent = "$" + Number(home.price).toLocaleString();
}

function nextHome() {
  index = (index + 1) % homes.length;
  showHome();
}

window.onload = function () {
  document.getElementById("like-btn").onclick = nextHome;
  document.getElementById("dislike-btn").onclick = nextHome;
};
