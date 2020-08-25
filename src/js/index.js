window.onload = function setTime() {
    let time = document.querySelector('#time');
    let date = new Date;
    time.outerHTML = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}
