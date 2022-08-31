// when yes button is clicked, increase count by 1
const yesButton = document.getElementById('yes');
yesButton.addEventListener('click', function() {
    const count = document.getElementById('count');
    const countValue = parseInt(count.innerText);
    count.innerText = countValue + 1;
} );


// when no button is clicked, increase count by 1