const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //Get random number between 0 - 3 colors
    const randomNumber = getRandomNumber();

    document.body.style.backGroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
