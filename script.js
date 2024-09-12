console.log("connected")
const changer = document.getElementById("changer");
const adviceTXT = document.getElementById("advicetxt");

window.onload = GenerateQoute();

changer.addEventListener("click",function(){
    GenerateQoute();
})

function GenerateQoute(){
    fetch("https://api.adviceslip.com/advice")
    .then(response =>response.json())
    .then((data) => data.slip)
    .then((data)=>{
        adviceTXT.textContent = data.advice;
    })
}