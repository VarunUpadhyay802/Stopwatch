var sec=document.getElementById("seconds_div")
var min=document.getElementById("minutes_div")
var start=document.getElementById("start_div")
var y=0;
var x=0;
var stop=document.getElementById("stop_div")
var restart=document.getElementById("reset_div")
// function inner(){
//     sec.innerHTML=y;
// y++;

// }


// function for_seconds(){
//     start.addEventListener("click",function print_sec(){
//     const v=setInterval(inner,1000)
//     }
//     )
// }
start.addEventListener("click",function timer1(){
    function timer(){
        console.log(y);
        
        if(y<=9|| y==0)
        sec.innerHTML="0"+y;
        else{
            sec.innerHTML=y
        }
        y++;
        if(y==6){
            min.innerHTML=x;
        }
    }
    const x = setInterval(timer,1000)
    stop.addEventListener("click",function helo(){
        console.log("yes");
        clearInterval(x);
    })
    restart.addEventListener("click",function(){
        sec.innerHTML="00"
        y=0;
        clearInterval(x);
        
        
    })
})
// const x = setInterval(timer,1000)

