function loadAudio(element) {
    var audioFile = element.getAttribute('data-audio');
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('audioContent').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', '/getAudio?audioFile=' + audioFile, true);
    xhr.send();
}