let scrollContainer = document.querySelector( ".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
} 
)

nextBtn.addEventListener("click", ()=>{
    scrollContainer.computedStyleMap.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
});


backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
 scrollContainer.scrollLeft -= 900;
});




document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup-login").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup-login").style.display = "none";

})


document.getElementById("reButton").addEventListener("click", function(){
    document.querySelector(".popup-register").style.display = "flex";
})

document.querySelector(".close1").addEventListener("click", function(){
    document.querySelector(".popup-register").style.display = "none";

})
document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.navigations ul');
    navMenu.classList.toggle('active');
});

