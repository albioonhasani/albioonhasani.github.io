const imageOptions = {
    motorsport: [
        { src: 'images/sparcoc.jpg', price:  115 },
        { src: 'images/arai.jpg', price: 980.29 },
        { src: 'images/omp.jpg', price: 469.49 },
        { src: 'images/garmin.jpg', price: 989 },
        { src: 'images/aimm.jpg', price: 1887.65 },
        { src: 'images/racelogic.jpg', price: 759 },
        { src: 'images/hankook.jpg', price: 95.66 },
        { src: 'images/maxsport.jpg', price: 1887.60 },
        { src: 'images/michelin.jpg', price:  612.00 },
    ],
    performance: [
        { src: 'images/forge.jpg', price: 628.00 },
        { src: 'images/airtec.jpg', price: 980.29 },
        { src: 'images/mishimoto.jpg', price: 469.49 },
        { src: 'images/mst.jpg', price: 419.24 },
        { src: 'images/ramair.jpg', price: 209.87 },
        { src: 'images/eventuri.jpg', price: 2745.60 },
        { src: 'images/milltek.jpg', price: 95.66 },
        { src: 'images/cobrasport.jpg', price: 915.19 },
        { src: 'images/scorpion.jpg', price: 485.10 },
    ],
    tools: [
        { src: 'images/wera.jpg', price: 247.20 },
        { src: 'images/draper.jpg', price: 109.08 },
        { src: 'images/sealey.jpg', price: 197.98 },
        { src: 'images/paoli.jpg', price: 924.00 },
        { src: 'images/saley.jpg', price: 212.80 },
        { src: 'images/draperig.jpg', price: 140.23 },
        { src: 'images/sealeyjack.jpg', price: 254.04 },
        { src: 'images/sealeystand.jpg', price: 50.87 },
        { src: 'images/sscizzor.jpg', price: 32.74 },
    ],
};

let selectedItems = [];

function populateImages() {
    var category = document.getElementById('partCategory').value;
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (imageOptions.hasOwnProperty(category)) {
        imageOptions[category].forEach((imageData, index) => {
            var imgElement = document.createElement('img');
            imgElement.src = imageData.src;
            imgElement.alt = category;
            imgElement.className = 'part-image';
            imgElement.setAttribute('data-price', imageData.price);
            imgElement.setAttribute('data-index', index); 
            imgElement.onclick = function () {
                selectImage(this);
            };
            imageContainer.appendChild(imgElement);
        });
    }
    updateTotal();
}

function selectImage(selectedImage) {
    if (selectedItems.length < 3 || selectedItems.includes(selectedImage)) {
        selectedImage.classList.toggle('selected-image');
        updateSelectedItems();
        updateTotal();
    } else {
        alert('You can only select up to three different items.');
    }
}

function updateSelectedItems() {
    selectedItems = Array.from(document.querySelectorAll('.selected-image'));
}

function updateTotal() {
    var quantity = document.getElementById('quantity').value;
    var totalPrice = 0;

    selectedItems.forEach(selectedImage => {
        var price = selectedImage.getAttribute('data-price');
        totalPrice += quantity * price;
    });

    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

document.getElementById('buyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Purchase successful!');
});

document.getElementById('quantity').addEventListener('input', updateTotal);


populateImages();



