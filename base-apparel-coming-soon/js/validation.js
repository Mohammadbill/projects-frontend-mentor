
let validateEmail = (event) => validateInput() ? true : event.preventDefault()

function validateInput() {
    const emailRegex = document.querySelector('input').value.match(/(^[a-z0-9_\.-]{3,})@{1}([a-z0-9]{3,})(\.{1}[a-z]{2,}){1,2}/i)
    return (emailRegex) ? {'email': emailRegex.input} : false;
}