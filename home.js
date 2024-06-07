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




