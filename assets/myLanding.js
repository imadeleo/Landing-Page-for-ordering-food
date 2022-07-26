let addressList = document.getElementById("address"),
    fastFood = document.getElementById("fastfood"),
    vegetables = document.getElementById("vegetables"),
    resturant = document.getElementById("resturant"),
    drinks = document.getElementById("drinks"),
    interests = document.querySelectorAll("#inter"),
    container = document.querySelectorAll(".interest");

addressList.addEventListener('input', function(e) {
    if(!(e.target.value == " ")){
        fastFood.src = "assets/images/fast-food.svg";
        vegetables.src = "assets/images/Vegetables & Drinks.svg";
        drinks.src = "assets/images/Drinks & Cocktails.svg";
        resturant.src = "assets/images/resturant.svg";

        interests.forEach((inter) => {
            inter.style.color = "brown";
        });

        for (let i = 0; i < container.length; i++){
            container[i].style.cursor = "pointer";
            container[i].addEventListener("click", function(){
                window.location = "vendor.html";
            });
        }
    }
})
