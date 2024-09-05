function makeBubble(){
    var clutter ="";

for ( var i = 0 ; i<=168 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var timer = 60;
function runTimer(){
    var runTimeInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(runTimeInterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000);
}

runTimer();
var hts = 0;
function hitScore(){
    hts = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hts; 
}
hitScore();

var score = 10;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener('click',function(dets){
   var ans=  Number(dets.target.textContent);
   if(ans == hts){
    increaseScore();
    makeBubble();
    hitScore();
   }
   else{
    setTimeout(function(){
        alert("Wrong click");
    },500)
   }
})
