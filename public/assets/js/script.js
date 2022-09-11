// when yes button is clicked, increase count by 1
const yesButton = document.getElementById('yes');
yesButton.addEventListener('click', function() {
    event.preventDefault();
    const count = document.getElementById('count');
    const countValue = parseInt(count.innerText);
    count.innerText = countValue + 1;
    console.log(countValue);
} );


// when no button is clicked, decrease no count by 1
const noButton = document.getElementById('no');
noButton.addEventListener('click', function() {
    event.preventDefault();
    const count = document.getElementById('count');
    const countValue = parseInt(count.innerText);
    count.innerText = countValue - 1;
    console.log(countValue);
}
);

