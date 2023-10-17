const elForm = document.querySelector('form')
const elFirstNameInput = document.querySelector(".input-name");
const elEmailInput = document.querySelector(".input-email");
const elPhoneInput = document.querySelector(".input-number");
const elCompanyInput = document.querySelector(".input-company");
const elNameInvalid = document.querySelector(".error-name");
const elEmailInvalid = document.querySelector(".error-email");
const elPhoneInvalid = document.querySelector(".error-number");
const elCompanyInvalid = document.querySelector(".error-number");
const elNameResult = document.querySelector('.output-name')
const elEmailResult = document.querySelector('.output-email')
const elPhoneResult = document.querySelector('.output-contact')
const elCompanyResult = document.querySelector('.output-company')
const elAllResult = document.querySelector('#results')
const elRadioInputs = document.querySelectorAll('input[type="radio"]');
const elServiceOutput = document.querySelector('.output-service');
const elBudgetOutput = document.querySelector('.output-budjet');
const elDetails = document.querySelector(".details-wrapper");


function updateSelectedService() {
    const selectedService = [...elRadioInputs].find(input => input.checked);
    if (selectedService) {  
        elServiceOutput.textContent = selectedService.value;
    }
}

function updateSelectedBudget() {
    const selectedBudget = [...document.querySelectorAll('input[name="budjet"]')].find(input => input.checked);
    if (selectedBudget) {
        elBudgetOutput.textContent = selectedBudget.parentElement.querySelector('.budjet__span').textContent;
    }
}

elRadioInputs.forEach(input => {
    input.addEventListener('change', function () {
        updateSelectedService();
        updateSelectedBudget();
    });
});

updateSelectedService();
updateSelectedBudget();

document.addEventListener("DOMContentLoaded", function () {
    elForm.addEventListener("submit", function(evt) {
        evt.preventDefault();
        
        const nameValue = elFirstNameInput.value.trim();
        const emailValue = elEmailInput.value.trim();
        const phoneValue = elPhoneInput.value.trim();
        const companyValue = elCompanyInput.value.trim();
        const phonePattern = /^\+\d{1,3}\d{10}$/; 
        
        if(nameValue.length < 2) {
            elNameInvalid.textContent = "Name must not be less than 2 letters"
            elNameInvalid.style.display = "block"
            elFirstNameInput.classList.add("invalid-value")
        } else if(nameValue.length > 30) {
            elNameInvalid.textContent = "Name must not exceed 30 letters"
            elNameInvalid.style.display = "block"
            elFirstNameInput.classList.add("invalid-value")
        } else {
            elNameResult.textContent = nameValue;
            elNameInvalid.style.display = "none"
            elFirstNameInput.classList.remove("invalid-value")
        };
        
        if(!emailValue.endsWith("@gmail.com") && !emailValue.endsWith("@yahoo.com") && !emailValue.endsWith("@mail.ru")) {
            elEmailInvalid.textContent = "Email should contain @gmail.com, @yahoo.com or @mail.ru"
            elEmailInput.classList.add("invalid-value");
            elEmailInvalid.style.display = "block";
        } else {
            elEmailResult.textContent = emailValue
            elEmailInvalid.style.display ="none"
            elEmailInput.classList.remove("invalid-value");
        } 
        
        if (!phonePattern.test(phoneValue)) {
            elPhoneInvalid.textContent = "Phone number should start with + and include country code.";
            elPhoneInput.classList.add("invalid-value");
            elPhoneInvalid.style.display = "block";
        } else {
            elPhoneResult.textContent = phoneValue;
            elPhoneInvalid.style.display = "none";
            elPhoneInput.classList.remove("invalid-value");
        }
        
        if(companyValue < 3) {
            elCompanyInvalid.textContent = "Company name must not be less than 3 letters"
            elPhoneInput.classList.add("invalid-input")
            elCompanyInvalid.style.display = "block"
        } else if(companyValue > 20) {
            elCompanyInvalid.textContent = "Company name must not exceed 20 letters"
            elPhoneInput.classList.add("invalid-input")
            elCompanyInvalid.style.display = "block"
        } else {
            elCompanyResult.textContent = companyValue
            elPhoneInput.classList.remove("invalid-input")
            elCompanyInvalid.style.display = "none"
        } 
        
        if (nameValue !== "" &&
        emailValue !== "" &&
        phoneValue !== "" &&
        companyValue !== "" &&
        elRadioInputs && elForm.querySelector('input[type="radio"]:checked')) {
            elDetails.style.display = 'none';
            elAllResult.style.display = 'block';
        } else {
            alert("Please fill in all required fields and select a service and budget.");
        }
        
    });
});








$(document).ready(function(){
    $('.details__list').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});