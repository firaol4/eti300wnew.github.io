const homes = [
    {
        address: "123 Main St",
        price: 450000,
        image_url: "https://via.placeholder.com/350x250"
    },
    {
        address: "55 Oak Lane",
        price: 520000,
        image_url: "https://via.placeholder.com/350x250"
    },
    {
        address: "89 Pine Road",
        price: 610000,
        image_url: "https://via.placeholder.com/350x250"
    }
];

let index = 0;

function showHome() {
    const home = homes[index];
    document.getElementById("home-image").src = home.image_url;
    document.getElementById("home-address").innerText = home.address;
    document.getElementById("home-price").innerText = "$" + home.price.toLocaleString();
}

document.getElementById("like-btn").onclick = () => {
    index = (index + 1) % homes.length;
    showHome();
};

document.getElementById("dislike-btn").onclick = () => {
    index = (index + 1) % homes.length;
    showHome();
};

showHome();