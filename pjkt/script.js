const marquee = document.getElementById('myMarquee');
const speedSlider = document.getElementById('speedSlider');
const buttons = document.querySelectorAll('.btn1, .btn2, .btn3, .btn4');
const darkmode = document.querySelector('.btn5')
const container = document.querySelector('.container')
let isDarkmode = localStorage.getItem('darkMode') === 'true'

if (isDarkmode) {
    container.classList.add('black');
    darkmode.textContent = "Light Mode";
}

darkmode.onclick = (event) =>{
    event.preventDefault();
    isDarkmode = !isDarkmode
    container.classList.toggle('black')
    darkmode.classList.toggle('drkmode')
    darkmode.textContent = isDarkmode ? "Light Mode" : 'Dark Mode'
    localStorage.setItem('darkMode', isDarkmode)
}


speedSlider.addEventListener('input', function() {
    marquee.setAttribute('scrollamount', this.value);
});

buttons.forEach((button, index) => {
    button.onclick = function() {
        window.location.href = `page/page${index + 1}.html`;
    };
});