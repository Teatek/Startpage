window.onload = function setTime() {
    let time = document.querySelector('#time');
    let date = new Date;
    time.outerHTML = `${date.getHours()}:${date.getMinutes()}`;
}

