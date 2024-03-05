const form = document.querySelector('#form');
console.log(form);
const username = document.querySelector('#name');
console.log(username);

const email = document.querySelector('#email');
console.log(email);

const password = document.querySelector('#pword');
console.log(password);

const cpassword = document.querySelector('#cpword');
console.log(cpassword);


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    console.log(cpasswordVal);


    //Username validtaion
    if(usernameVal===''){
        setError(username, 'name is required')
    }
    else{
        setSuccess(username)
    }

    //Email validation
    if(emailVal===''){
        setError(email, 'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email, 'A Valid Email is required')
    }
    else{
        setSuccess(email)
    }

    //password Validation
    if(passwordVal ===''){
        setError(password, 'Password must be atleast 8 chracter long')
    }
    else if(passwordVal.length<8){
        setError(password, 'Password must be atleast 8 chracter long')
    }
    else{
        setSuccess(password)
    }

    //Password match validation
    if(cpasswordVal ===''){
        setError(cpassword, 'Password requuired')
    }
    else if(!(cpasswordVal === passwordVal)){
        setError(cpassword, 'Password doesn\'t match')
    }
    else{
        setSuccess(cpassword)
    }
}

function validateEmail(email1){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return String(email1).match(emailRegex);
};

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error1')
    inputGroup.classList.remove('success')

}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('successr')
    inputGroup.classList.remove('error1')

}

