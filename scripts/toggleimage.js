
function toggleImage(imgId, btnId) {
    var image = document.getElementById(imgId);
    var btn = document.getElementById(btnId);
    if (image.style.display === 'none') {
        image.style.display = 'block';
        btn.textContent = "Hide PayPal QR";

    } else {
        image.style.display = 'none';
        btn.textContent = "Show PayPal QR"
    }
}
