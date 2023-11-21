let shiftPressTimes = 0
const searchBox = document.getElementById('searchbox')

document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
        shiftPressTimes++
        if (shiftPressTimes % 2 == 0) {
            showSearchBox()
        }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (searchBox.style.display != 'none') {
            searchBox.style.display = 'none'
        }
    }
})

function showSearchBox() {
    searchBox.style.display = 'block'
    document.getElementById('searchbox_cont').focus()
}