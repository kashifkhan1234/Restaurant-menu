// dark mode

const themeswitch = document.getElementById("theme-switch");
const body = document.body;

themeswitch.addEventListener('change', function () {
    body.classList.toggle("dark-mode");
});

// animation

const footerimages = document.querySelectorAll(".images .footer img");

const foodbarimage = document.querySelector(".foodbar img");

 footerimages.forEach(image => {
 image.addEventListener('click', () => {   
      foodbarimage.src = image.src;
 });

 });

 const itemimages = document.querySelectorAll(".item-img");

 itemimages.forEach(img => {
    img.addEventListener('click', () => {
        itemimages.forEach(img => img.classList.remove("animated")); 
            img.classList.add("animated");
        });
        });

        // add to cart

        const addToCartButtons = document.querySelectorAll('.images a');

        const carticon =document.querySelector('.top navbar .icons a i');

        let cartCount = 0;

        addToCartButtons.forEach(button =>{
            button.addEventListener('click', () => {
                cartCount++;
                carticon.textContent = cartCount;
            });
        })