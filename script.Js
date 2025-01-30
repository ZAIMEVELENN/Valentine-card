const alternatives = [
    {text:"Please naaaaa babyyyyy", images:"download.jpg"},
    {text:"did you click this out of spite baby?", images:"download (1).jpg"},
    {text:"i can assure you you wont regret it", images:"download (2).jpg"},
    {text:"With all due respect do you think ill take No lightly?", images:"download (3).jpg"},
    {text:"PLEASE!!!!!!!", images:"download (4).jpg"}
];
const ohyes = {text:"Thank you accepting me as your valentine <3", images:"haikyuucelebrate.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'YES'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});