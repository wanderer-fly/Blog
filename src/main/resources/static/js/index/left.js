var text = document.getElementById('nickname')

var str = '蹦蹦小圆帽'

print(str)

function print(str) {
    for (let step = 0; step <= str.length; step++) {
        setTimeout(() => {
            text.innerText = str.substr(0, step)
            if (step != str.length) {
                text.innerText += ' _'
            }
        }, 200 * step)
    }
}