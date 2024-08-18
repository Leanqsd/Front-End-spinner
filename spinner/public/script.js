document.getElementById('spin-btn').addEventListener('click', function (){
var btn = document.getElementById('spin-btn');
var spinner = document.getElementById('spinner');

btn.style.display = 'none';

spinner.style.display = 'block';
spinner.classList.add('spin');
});