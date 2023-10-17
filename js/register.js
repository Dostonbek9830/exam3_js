const elRegisterForm = document.querySelector(".form");
const elUserFirstNameInput = document.querySelector(".input-first-name");
const elUserLastNameInput = document.querySelector(".input-last-name");
const elUserEmailInput = document.querySelector(".input-email");
const elUserPasswordInput = document.querySelector(".input-pasword");
const elUserRepeatPasswordInput = document.querySelector(".input-repeat-password");
const elFirstNameInvalidValue = document.querySelector(".invalid-span-first-name");
const elLastNameInvalidValue = document.querySelector(".invalid-span-last-name");
const elEmailInvalidValue = document.querySelector(".invalid-email");
const elPasswordlInvalidValue = document.querySelector(".invalid-password");
const elRePasswordlInvalidValue = document.querySelector(".invalid-repassword");
const elShowButton = document.querySelector(".eye-Btn")

// function showCase() {
//     if(eluser === 'password') {
//         elUserPasswordInput.type = "text";
//     } else {
//         elUserPasswordInput.type = "password";
//     }
// }

// elShowButton.addEventListener("click", showCase);

elRegisterForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    const firstNameValue = elUserFirstNameInput.value.trim();
    const containsNumbers = /\d/.test(firstNameValue);
    const lastNameValue = elUserLastNameInput.value.trim();
    const containsNumbersLastName = /\d/.test(lastNameValue);
    const emailValue = elUserEmailInput.value.trim();
    const passwordValue = elUserPasswordInput.value.trim();
    const repeatPasswordValue = elUserRepeatPasswordInput.value.trim();
    
    if(firstNameValue.length < 2) {
        elFirstNameInvalidValue.textContent = "First name must be more than 2 letters";
        elFirstNameInvalidValue.style.display = "block";
        elUserFirstNameInput.classList.add("invalid-input")
        return;
    } else {
        elFirstNameInvalidValue.style.display = "none"
        elUserFirstNameInput.classList.remove("invalid-input")
    }
    
    if(containsNumbers) {
        elFirstNameInvalidValue.textContent = "First name should not contain numbers";
        elFirstNameInvalidValue.style.display = "block";
        elUserFirstNameInput.classList.add("invalid-input")
        return;
    } else {
        elFirstNameInvalidValue.style.display = "none"
        elUserFirstNameInput.classList.remove("invalid-input")
    }
    
    if(firstNameValue.length > 30) {
        elFirstNameInvalidValue.textContent = "First name must not exceed 30 letters";
        elFirstNameInvalidValue.style.display = "block";
        elUserFirstNameInput.classList.add("invalid-input")
        return;
    } else {
        elFirstNameInvalidValue.style.display = "none"
        elUserFirstNameInput.classList.remove("invalid-input")
    }
        
    
    if(lastNameValue.length < 2) {
        elLastNameInvalidValue.textContent = "Last name must be more than 2 letters";
        elLastNameInvalidValue.style.display = "block";
        elUserLastNameInput.classList.add("invalid-input")
        return;
    } else {
        elLastNameInvalidValue.style.display = "none"
        elUserLastNameInput.classList.remove("invalid-input")
    }
    
    if(containsNumbersLastName) {
        elLastNameInvalidValue.textContent = "Last name should not contain numbers";
        elLastNameInvalidValue.style.display = "block";
        elUserLastNameInput.classList.add("invalid-input")
        return;
    } else {
        elLastNameInvalidValue.style.display = "none"
        elUserLastNameInput.classList.remove("invalid-input")
    }
    
    if(lastNameValue > 30) {
        elLastNameInvalidValue.textContent = "Last name must not exceed 30 letters";
        elLastNameInvalidValue.style.display = "block";
        elUserLastNameInput.classList.add("invalid-input")
        return;
    } else {
        elLastNameInvalidValue.style.display = "none"
        elUserLastNameInput.classList.remove("invalid-input")
    }

    if(!emailValue.endsWith("@gmail.com") && !emailValue.endsWith("@yahoo.com") && !emailValue.endsWith("@mail.ru")) {
        elEmailInvalidValue.textContent = "Email should contain @gmail.com, @yahoo.com or @mail.ru"
        elUserEmailInput.classList.add("invalid-input");
        elEmailInvalidValue.style.display = "block";
        return;
    } else {
        elEmailInvalidValue.style.display ="none"
        elUserEmailInput.classList.remove("invalid-input");
    } 

    if(passwordValue.length <= 8) {
        elPasswordlInvalidValue.textContent = "Password must contain at least 8 characters"
        elUserPasswordInput.classList.add("invalid-value")
        elPasswordlInvalidValue.style.display = "block"
        return;
    } else {
        elUserPasswordInput.classList.remove("invalid-value")
        elPasswordlInvalidValue.style.display = "none"
    }

    if(!/^[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(passwordValue)) {
        elPasswordlInvalidValue.textContent = "Password must contain numbers and letters"
        elUserPasswordInput.classList.add("invalid-value")
        elPasswordlInvalidValue.style.display = "block"
        return;
    } else {
        elUserPasswordInput.classList.remove("invalid-value")
        elPasswordlInvalidValue.style.display = "none"
    }
    
    if(repeatPasswordValue != passwordValue) {
        elRePasswordlInvalidValue.textContent = "Passwords must match each other"
        elUserRepeatPasswordInput.classList.add("invalid-value")
        elRePasswordlInvalidValue.style.display = "block"
        return;
    } else {
        elUserRepeatPasswordInput.classList.remove("invalid-value")
        elRePasswordlInvalidValue.style.display = "none"
    }

});