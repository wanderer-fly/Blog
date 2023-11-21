let shiftPressTimes = 0
const searchBox = document.getElementById('searchbox')
const searchInp = document.getElementById('searchbox_cont')

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
    searchInp.focus()
}

// Search實現

var conts = document.querySelector('#mdcont')

var contexts = conts.textContent

searchInp.addEventListener('keydown', function(event) {
    var re = searchInp.value
    result = contexts.match(re)
    if (result) {
        console.log(result)
    }
})