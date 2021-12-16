const username = document.getElementById('username');
const email = document.getElementById('emailId');
const phone = document.getElementById('moblId');
const submit=document.getElementById('submit');
const alertSuccess=document.getElementById('alertSuccess');
const alertFailure=document.getElementById('alertFailure');
alertFailure.classList.remove('show');
alertSuccess.classList.remove('show');

let validUser = false;
let validEmail= false;
let validPhone= false;


console.log(username,email);

username.addEventListener('blur',()=>{
     console.log("blured");
     //  validate
    const  regexName= /^[a-zA-Z]([0-9a-zA-Z]){1,15}/;
    const str= username.value;
    if(regexName.test(str)){
        console.log("Valid Name");
        username.classList.remove('is-invalid');
         validUser = true;
    }
     else {
         console.log('Invalid Name');
         username.classList.add('is-invalid');
          validUser = false;
     }
});

email.addEventListener('blur',()=>{
     console.log("blured");
     //  validate
     const  regexEmail= /^([_\-\.0-9a-zA-Z]){2,25}@([[_\-\.0-9a-zA-Z]){2,7}\.([a-zA-Z]){2,7}$/;
     const str=email.value;
     if(regexEmail.test(str)){
         console.log("Valid Email");
         email.classList.remove('is-invalid');
         validEmail= true;
     }
      else {
          console.log('Invalid Email');
          email.classList.add('is-invalid');
          validEmail= false;
      }

});

phone.addEventListener('blur',()=>{
     console.log("blured");
     //  validate

     const  regexPhone= /^([0-9]){10}$/;
     const str= phone.value;
     if(regexPhone.test(str)){
         console.log("Valid Moblie Number");
         phone.classList.remove('is-invalid');
          validPhone= true;
     }
      else {
          console.log('Invalid Moblie Number');
          phone.classList.add('is-invalid');
           validPhone= false;
      }
});
    submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validEmail && validPhone && validUser){
        alertSuccess.classList.add('show');
        alertFailure.classList.remove('show');  
    }
    else{
        alertSuccess.classList.remove('show');
        alertFailure.classList.add('show');
        const failure = document.querySelector('#alertFailure');
          failure.style.color='red'
          failure.style.position='absolute';
          failure.style.top='0%';
          failure.style.width="100%"
          failure.style.radius="10px";
    }    
});