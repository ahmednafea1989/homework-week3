let generate = document.getElementById("pass");

let show = document.getElementById("passwordBox");

let passmin = 8;

let passmax = 128;
function generatepassword() {
    let number = "0123456789";
    let lowercaseletter = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialCharacters = "@#!$"
    let passwordLength = prompt("how long do you want the password?");
    let askLower = confirm("do you want lower case letters");
    
    let askUpper = confirm("do you want upper case letters");
    let asknumber = confirm("do you want numbers");
    let askCharacters = confirm("do you wantspecialCharacters ");
    
    




    if ((passwordLength >= passmin && passwordLength <= passmax)) {




        let password = "";
        for (let i = 0; i <= passwordLength; i++) {
            if (lowercaseletter && password.length < passwordLength && askLower === true) {
                password = password += lowercaseletter.charAt(Math.floor(Math.random() * lowercaseletter.length));
            }

            if (uppercaseletter && password.length < passwordLength && askUpper === true) {
                password = password += uppercaseletter.charAt(Math.floor(Math.random() * uppercaseletter.length));


            }
            if (number && password.length < passwordLength && asknumber === true) {
                password = password += number.charAt(Math.floor(Math.random() * number.length));

            }


            if (specialCharacters && password.length < passwordLength && askCharacters === true) {
                password = password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
            }
        };


        console.log(password);
        show.textContent = password;
        document.getElementById("passwordBox").style.textAlign = "center";


    } else {
        alert("please enter valid number");
    }



}

generate.addEventListener("click", function () {

    generatepassword();
})


