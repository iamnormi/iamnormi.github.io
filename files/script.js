
var typed = new Typed(".text", {
    strings: ["Cyber Security Researcher" , "Web Developer", "Application Developer", "Opensource enthusiast" , "Network Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var typed = new Typed(".tt", {
    strings: ["Cyber Security Researcher!" , "Web Developer!", "Application Developer!", "Opensource enthusiast!" , "Network Engineer!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwMST6haa-Zw7nzZiupC7VUzDNWEpmEKBBj6p40kgrM7zwEJA74NCt33s--PO_a3zox/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})

window.addEventListener('contextmenu', function (e) {
   e.preventDefault();
    }, false);
