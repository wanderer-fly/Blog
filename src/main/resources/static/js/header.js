document.getElementById('logo').addEventListener('click', function() {
    const menuBar = document.getElementById('header');
    const rotateImage = document.getElementById('logoImg');
    rotateImage.classList.toggle('rotated');
    menuBar.style.transform = menuBar.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)';
});

document.getElementById('search-icon').addEventListener('click', function() {
    console.log(document.getElementById('search').value)
})

document.getElementById('search').addEventListener('input', function(){
    console.log(document.getElementById('search').value)
})