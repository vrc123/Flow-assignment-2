document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameDiv = document.querySelector("#username");
    const emailDiv = document.querySelector("#email");
    const messageDiv = document.querySelector("#message");

    const day = new Date();

    if(day.getDay() >= 1 && day.getDay() <= 4) {
        if(emailDiv.value.includes("cph-") && emailDiv.value.includes("cphbusiness.dk")) {
            const emailObject = {
                name: usernameDiv.value.trim(),
                email: emailDiv.value.trim(),
                message: messageDiv.value.trim()
            }
    
            console.log(emailObject);   
        }else {
            alert("Please use a cphbusiness email!")
        }
    }else {
        alert("You can only submit on Mondays, Tuesdays, Wednesdays or Thursdays!")
    }
});