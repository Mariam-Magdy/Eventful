var spinnerX = document.querySelector('.spinnerX');
var pageX = document.querySelector('#pageX');

// setTimeout(() => {
//     spinnerX.style.display = 'none';
//     pageX.style.display = 'block';
// }, 2000);

window.addEventListener('load', function() {
    spinnerX.style.display = 'none';
    pageX.style.display = 'block';
    console.log('All assets are loaded')
})