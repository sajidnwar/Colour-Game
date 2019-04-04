var colour=generaterandom(6);
var h1=document.querySelector("h1")
var reset=document.getElementById("reset")
var msg=document.getElementById("answer");
var square=document.querySelectorAll(".square")
var btn1=document.getElementById("esybtn");
var btn2=document.getElementById("hrdbtn");
var pickedcolour=pick();
//alert(pickedcolour)
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedcolour

btn1.addEventListener("click",function(){
    btn2.classList.remove("selected");
    btn1.classList.add("selected");
    colour=generaterandom(3);
    for(var i=0;i<square.length;i++)
       {
           if(colour[i])
           square[i].style.background=colour[i];
           else{
               square[i].style.display="none";
           }
       }
    
    pickedcolour=pick();
    colorDisplay.textContent=pickedcolour
})
btn2.addEventListener("click",function(){
    btn1.classList.remove("selected");
    btn2.classList.add("selected");
    colour=generaterandom(6);
    for(var i=0;i<square.length;i++){
        square[i].style.background=colour[i];
        square[i].style.display="block";
    }
        
    pickedcolour=pick();
    colorDisplay.textContent=pickedcolour
})


reset.addEventListener("click",function(){
    colour=generaterandom(6);
    for(var i=0;i<square.length;i++)
        square[i].style.background=colour[i];
    pickedcolour=pick();
    colorDisplay.textContent=pickedcolour
    h1.style.background="#232323"
    msg.textContent=""
    reset.textContent="New Game"
})

for(var i=0;i<square.length;i++){
    square[i].style.background=colour[i];

    square[i].addEventListener("click",function(){
        var clicked=this.style.background;
        if(clicked===pickedcolour){
            reset.textContent="play Again?"
            msg.innerHTML="<b>Correct!!</b>"
            changecolour(clicked);
        }
        else{
            msg.innerHTML="<b>WRONG!!</b>"
            this.style.background="#232323"
        }
    })
}
function changecolour(color){
    for(var i=0;i<square.length;i++){
        square[i].style.background=color
    }
    h1.style.backgroundColor=color
}
function pick(){
    var r=Math.floor(Math.random()*colour.length)
    return colour[r];
}
function generaterandom(n){
    var arr=[];
    for(var i=0;i<n;i++){
        arr[i]=randomcolor();
    }
    return arr;
}
function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}