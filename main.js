
let barButton = document.querySelector(".bar .bar-con"),
    nav = document.getElementById("navbar"),
    close = document.getElementById("close");

if(barButton){
    barButton.addEventListener("click",function(){
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",function(){
        nav.classList.remove("active")
    })
}
/* Product switch*/
let mainImage = document.querySelector(".pro-images .main-image"),
    imageCollection = document.querySelectorAll(".image-collection img");

    for(let i = 0 ; i < imageCollection.length; i++){
        imageCollection[i].addEventListener("click", function(){
            mainImage.setAttribute("src", imageCollection[i].getAttribute("src"))
        })
    }

/* Product switch*/
/* Change window to product */
let pro1 = document.querySelector(".pro");
pro1.addEventListener("click", function(){
    window.location.href="product1.html"
}) 

/* Change window to product */