function toggleDiv(divId, btnId) {
    var div = document.getElementById(divId);
    var button = document.getElementById(btnId);
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.textContent = 'Hide Card Options';
    } else {
        div.style.display = 'none';
        button.textContent = 'Show Card Options';
    }
}