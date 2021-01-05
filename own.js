// generate a random color
function generateRandomColor(){
    let colorCode = "0123456789abcdef";
    let finalColor = "";

    while (finalColor.length < 6){
        finalColor += colorCode[getRandomInt(colorCode.length)];
    }
    return `#${finalColor}`;
}
//get a random int from max number
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
//change body background color
function changeBackgroundColor(){
    document.body.style.backgroundColor = generateRandomColor()
}

/// listing window event
window.addEventListener("click", changeBackgroundColor)
