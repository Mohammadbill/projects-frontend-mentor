function addErrorClass (inputClass) {
    document.querySelector(`p.error.${inputClass}`).classList.add('activated');
}
function removeErrorClass (inputClass) {
    document.querySelector(`p.error.${inputClass}`).classList.remove('activated');
}

const inputs = document.querySelectorAll('input');
const emailRegex = new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", 'g');

[...document.querySelectorAll('button')][0].addEventListener('click', event => {
    inputs.forEach(input => {
        switch (input.type) {
            case 'password':
                (input.value.length < 8) ? addErrorClass(input.classList[0]) : removeErrorClass(input.classList[0]);
                break;
            case 'email':
                (!(emailRegex.test(input.value))) ? addErrorClass(input.classList[0]) : removeErrorClass(input.classList[0]);
                break;
            default:
                (input.value.length < 1) ? addErrorClass(input.classList[0]) : removeErrorClass(input.classList[0]);
        }
    })
})
