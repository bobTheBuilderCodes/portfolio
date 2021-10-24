const img = document.getElementById("img");

console.log(img)
img.addEventListener("click", changeImage)


function changeImage(){
    img.classList.add("rotate")
    img.setAttribute("src", "./images/Fam.jpg")
    setTimeout(()=>{
        img.setAttribute("src", "./images/pic.jpg")
    }, 4000)
}