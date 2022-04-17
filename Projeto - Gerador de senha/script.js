let sliderElemente = document.querySelector("#slider");
let buttonElemente = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpasword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%*";
let novaSenha = "";

sizePassword.innerHTML = sliderElemente.value;

slider.oninput = function(){ 
    sizePassword.innerHTML = this.value;

}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElemente.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
    }


containerpasword.classList.remove("hide");   
password.innerHTML = pass;
novaSenha = pass

}

function copyPassword(){

alert("Senha copiada com sucesso!")
navigator.clipboard.writeText(novaSenha);

}

