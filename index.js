const openbtn = document.querySelector(".menuBTn");
const closeBTn = document.querySelector(".closeBtn")
const mobileMEnu = document.querySelector(".MobileContainer")

openbtn.addEventListener("click",()=>{
 mobileMEnu.style.display = "block"
})

closeBTn.addEventListener("click",()=>{
 mobileMEnu.style.display = "none"
})