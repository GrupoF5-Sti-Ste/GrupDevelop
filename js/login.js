document.querySelector('.hamburger').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'none') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
});
