let cart = document.getElementById("cart");
let shopCard = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a class="empty" href="">Cart is Empty</a>'

})

shopCard.forEach(function(card){
    card.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Trends At EchoSonic</h1>
        
        <p>Immerse yourself in superior audio quality and<br> comfort with our premium headphones!.</p>
        <p>Noise cancellation.</p>
        <p>Bluetooth connectivity.</p>
        <p>Crystal-clear sound and deep bass.</p>
        <a href="">Shop Now</a>
        <a href="">Back</a>
        </div>
        `
        console.log(card);
        document.querySelector("body").appendChild(div)
    })
})