var list=document.querySelectorAll("button").length;

for(var i=0;i<list;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    var btnltr=this.innerHTML;
    
    makeSound(btnltr);
    buttonAnimation(btnltr);
    
});
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key){
        case "w":
         var audio=new Audio("./sounds/crash.mp3");
         audio.play();
         break;

        case "a":
         var audio=new Audio("./sounds/kick-bass.mp3");
         audio.play();
         break;

        case "s":
         var audio=new Audio("./sounds/snare.mp3");
         audio.play();
         break;

        case "d":
         var audio=new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;

        case "j":
         var audio=new Audio("./sounds/tom-2.mp3");
         audio.play();
         break;

        case "k":
         var audio=new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;

        case "l":
         var audio=new Audio("./sounds/tom-4.mp3");
         audio.play(); 
         break;

        default:
    }
}

function buttonAnimation(press){
    document.querySelector("."+press).classList.add("pressed");

    setTimeout(function (){
        document.querySelector("."+press).classList.remove("pressed");
    },100);
}


