const button = document.getElementById("myb")
const user = document.getElementById("user")
const pass = document.getElementById("pass")
const val = document.getElementById("val")

button.onclick = function(){
    if(user.value == "admin" && pass.value == "admin"){
        window.location.href = "dashboard.html";
        
    }
    else{
        val.textContent = "Wrong Credentials";
    }


}