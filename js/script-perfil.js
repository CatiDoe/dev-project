function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("successMessage");
    const helperMessage = document.getElementById("helperMessage");
    const validEmail = "cereal@gmail.com";
    const validPassword = "kellogs123";

    reset()
    if(email === validEmail && password === validPassword){
        successMessage.classList.remove("invisible")
        successMessage.classList.add("visible"); 
    } else {
        helperMessage.classList.remove("invisible");
        helperMessage.classList.add("visible");
    }
}

function reset(){
    successMessage.classList.add("invisible")
    helperMessage.classList.add("invisible");
}