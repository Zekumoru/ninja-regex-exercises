const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/i,
    password: /^[\w@-]{8,20}$/i,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/
};

function validate(field, regex) {
    if (field.value && regex.test(field.value)) {
        console.log(field.value);
        field.className = 'valid';
    }
    else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
});
