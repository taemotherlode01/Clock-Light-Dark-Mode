const timeEl = document.querySelector(".time")
const toggle = document.querySelector(".toggle")
function setTime(){
   const time = new Date()
   const hours = time.getHours()
   const minutes = time.getMinutes()
   const seconds = time.getSeconds()
   timeEl.innerHTML = `${hours}:
   ${minutes<10 ? `0${minutes}` : minutes}:
   ${seconds<10 ? `0${seconds}` : seconds}`
}

toggle.addEventListener("click",(e)=>{
    const html = document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }
})


//start website
setTime()
//Automatic call function every 1 second
setInterval(setTime,1000)