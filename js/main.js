var Switch_btn = document.querySelector("#switch");

Switch_btn.addEventListener('click',()=>{

    document.body.classList.toggle("dark");
    Switch_btn.classList.toggle("active");
});

console.log("hola")


