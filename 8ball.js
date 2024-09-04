let responseButton = document.getElementById("reponseButton")
let responseBox = document.getElementById("responseBox")

const ansrArray = ['Defo No', 'No', 'Leaning On No', 'Leaning On Yes', 'Yes', 'Defo Yes']
const colorArray = ['#4f0c05','#94530d','#918a1d','#8ab827','#1a7d0c','#136e5d']

function chooseResponse(){
    randNum = Math.floor(Math.random() *6)
    responseBox.innerHTML = ansrArray[randNum]

    responseBox.style.color = colorArray[randNum]
}