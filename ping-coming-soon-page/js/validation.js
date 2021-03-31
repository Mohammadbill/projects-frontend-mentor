const emailRegex = new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", 'g');
const changeElements = [...document.getElementsByClassName('validation-pending')];

document.getElementById('form-submit').addEventListener('click', () => {
    let emailInput = document.getElementById('email');
    let email =  String(emailInput.value).toUpperCase();
    
    if (!(emailRegex.test(email))) {
        changeElements.forEach( item => {
            item.classList.add("validation-failed");
        })
    } else {
        changeElements.forEach( item => {
            if (item.classList.contains("validation-failed")) {
                item.classList.remove("validation-failed")
            }
        })
    }
});