const settings = document.getElementById('settings')
const darkmode = document.getElementById('darkmode')

// base

const dock = document.getElementById('dock');

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const screenWidth = window.innerWidth;

            if (mouseX >= screenWidth - 80) {
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

function switchPage(pageId) {

    //Set all none
    document.getElementById('mainbox1').style.display = 'none'
    document.getElementById('mainbox2').style.display = 'none'
    document.getElementById('mainbox3').style.display = 'none'
    document.getElementById('mainbox4').style.display = 'none'
    document.getElementById('mainbox5').style.display = 'none'

    //Set display page
    document.getElementById(pageId).style.display = 'flex'

    if (document.getElementById('mainbox2').style.display == 'flex') {
        document.getElementById('leftbox').style.display = 'none'
        document.getElementById('rightarea').style.display = 'none'
    } else {
        document.getElementById('leftbox').style.display = 'flex'
        document.getElementById('rightarea').style.display = 'block'
    }
}