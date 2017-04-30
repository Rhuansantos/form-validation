(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// inputs
var name = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var phone = document.querySelector('#phone');
var select = document.querySelector('#country');
var submit = document.querySelector('#submit');
var alertMsg = document.querySelectorAll('.alert');

// erros
var msgName = document.querySelector('[data-name]');
var msgEmail = document.querySelector('[data-email]');
var msgPass = document.querySelector('[data-pass]');
var msgPhone = document.querySelector('[data-phone]');
var msgCountry = document.querySelector('[data-country]');

var validationForm = function () {
    function validationForm(input, type, errors) {
        _classCallCheck(this, validationForm);

        this.input = input;
        this.type = type;
        this.errors = [];

        var exec = this.verifyErrors();
    }

    _createClass(validationForm, [{
        key: 'displayMessage',
        value: function displayMessage(error) {

            var displayMsg = '<li>' + error + '</li>';
            this.errors.push(displayMsg);
        }
    }, {
        key: 'verifyErrors',
        value: function verifyErrors() {

            var status = this.input.validity;

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

                if (status.tooShort) {
                    this.displayMessage('this value is too short');
                }
            }

            if (this.type == 'email') {
                if (!this.input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                    this.displayMessage('this is not a valid format (ex. name@gmail.com)');
                }
            }

            if (this.type == 'password') {
                if (!this.input.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g)) {
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
    }]);

    return validationForm;
}();

submit.addEventListener('click', function (event) {

    event.preventDefault();

    // instanciate inputs
    var validateName = new validationForm(name, 'text');
    var validateEmail = new validationForm(email, 'email');
    var validatePass = new validationForm(password, 'password');
    var validatePhone = new validationForm(phone, 'tel');

    // getting msg
    msgName.innerHTML = validateName.errors.join('');
    msgEmail.innerHTML = validateEmail.errors.join('');
    msgPass.innerHTML = validatePass.errors.join('');
    msgPhone.innerHTML = validatePhone.errors.join('');

    // if everything is ok
    if (msgName.innerHTML === '' && msgEmail.innerHTML === '' && msgPass.innerHTML === '' && msgPhone.innerHTML === '') {
        submit.addEventListener('click', feedback());
    }
});

function feedback() {

    form.innerHTML = '\n\t    <div id="feedback">\n\t\t    <img src="img/circle-check.svg" alt="ok" />\n\t\t    <h2>Awesome, you\'re good to go!</h2>\n\t    </h1>';
}

// populate select
for (index in data) {
    select.options[select.options.length] = new Option(data[index], index);
}

},{}]},{},[1]);
