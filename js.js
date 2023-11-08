let moon = document.getElementById("moonDiv");
let sun  = document.getElementById("sunDiv");
let night = function(){
    moon.style.transition = "10s";
    moon.style.marginLeft = "-40px";
    sun.style.transition = "10s";
    sun.style.marginTop = "-165px";
    document.body.style.transition = "15s";
    document.body.style.backgroundColor = "#95c5f5"
    sun.style.backgroundColor = "rgb(236 ,220 ,76)"; 
}
setTimeout(()=>{
    night()
},1000
)