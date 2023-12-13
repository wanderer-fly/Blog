const settings = document.getElementById('settings')
const darkmode = document.getElementById('darkmode')

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