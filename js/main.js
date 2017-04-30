// inputs
const name 		= document.querySelector('#name');
const email 	= document.querySelector('#email');
const password 	= document.querySelector('#password');
const phone 	= document.querySelector('#phone');
const select 	= document.querySelector('#country');
const submit    = document.querySelector('#submit');
const alertMsg 	= document.querySelectorAll('.alert');


// erros
const msgName = document.querySelector('[data-name]');
const msgEmail = document.querySelector('[data-email]');
const msgPass = document.querySelector('[data-pass]');
const msgPhone = document.querySelector('[data-phone]');
const msgCountry = document.querySelector('[data-country]');


class validationForm {

	constructor(input, type, errors) {
		this.input = input;
		this.type = type;
		this.errors = [];

		let exec = this.verifyErrors();
	}

	displayMessage(error){

		let displayMsg = '<li>' + error + '</li>';
		this.errors.push(displayMsg);

	}

	verifyErrors() {

		let status = this.input.validity;
        
        if (status.valueMissing) {
            this.displayMessage("this value is required");
        } else if (this.type == 'tel') {
            if (this.input.value != '') {
                if (!this.input.value.match(/\d{3}[\-]\d{3}[\-]\d{4}/g)) {
                    this.displayMessage("this is not a valid phone number");
                }
            }
        }

        if (this.type == 'text' || this.type == 'password') {
            if (status.tooLong) {
                this.displayMessage('this value is too long');
            }

            if(status.tooShort){
                this.displayMessage('this value is too short');
            }
        }


        if(this.type == 'email'){
            if(!this.input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
                this.displayMessage('this is not a valid format (ex. name@gmail.com)');
            }
        }


        if(this.type == 'password'){
            if (!this.input.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g)){
                if (!this.input.value.match(/[A-Z]/g)) {
                    this.displayMessage("this should have at least one cappital letter");
                }
                if (!this.input.value.match(/[0-9]/g)) {
                    this.displayMessage("this should have at least one number");
                }
                if (!this.input.value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g)) {
                    this.displayMessage("this should have at least one symbol");
                }
            }
        }
    }


}

submit.addEventListener('click', (event) => {

	event.preventDefault();

	// instanciate inputs
	let validateName = new validationForm(name, 'text');
	let validateEmail = new validationForm(email, 'email');
	let validatePass = new validationForm(password, 'password');
	let validatePhone = new validationForm(phone, 'tel');

	// getting msg
    msgName.innerHTML = validateName.errors.join('');
    msgEmail.innerHTML = validateEmail.errors.join('');
    msgPass.innerHTML = validatePass.errors.join('');
    msgPhone.innerHTML = validatePhone.errors.join('');

     // if everything is ok
    if (msgName.innerHTML === '' && msgEmail.innerHTML === '' && msgPass.innerHTML === '' && msgPhone.innerHTML === '') {
        submit.addEventListener('click', feedback());
    }

 })


function feedback(){

    form.innerHTML = `
	    <div id="feedback">
		    <img src="img/circle-check.svg" alt="ok" />
		    <h2>Awesome, you're good to go!</h2>
	    </h1>`
}


// populate select
for(index in data) {
    select.options[select.options.length] = new Option(data[index], index);
}

