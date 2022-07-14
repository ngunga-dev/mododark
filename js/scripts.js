const changeTheme=document.querySelector("#change-theme")


const toggleDarkMode=()=>{
    
    document.body.classList.toggle("dark");
}

changeTheme.addEventListener("change",()=>{
    toggleDarkMode()
    // save
localStorage.removeItem("dark")
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark")
    }
})