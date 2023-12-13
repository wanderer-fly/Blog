const settings = document.getElementById('settings')
const darkmode = document.getElementById('darkmode')

// base

const dock = document.getElementById('dock');

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const screenWidth = window.innerWidth;

            if (mouseX >= screenWidth - 50) {
                dock.style.right = '20px';
            } else {
                dock.style.right = '-80px';
            }
        });
// settings

document.getElementById('settings-btn').addEventListener('click', function() {

    if (settings.style.display == 'block') {
        settings.style.display = 'none'
    } else {
        settings.style.display = 'block'
    }

})

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode')
}

document.getElementById('darkmode-btn').addEventListener('click', function() {
    const html = document.documentElement
    html.classList.toggle('dark-mode')
})