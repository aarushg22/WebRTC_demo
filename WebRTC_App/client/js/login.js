'use strict';

$(document).ready(function() {

    $('#submit').click(function (event) {

        event.preventDefault(); // prevent PageReLoad

        var isNurse = $('#username').val().toLowerCase() === 'nurse'; // User validate
        var isPatient = $('#username').val().toLowerCase() === 'patient'; // User validate

        if (isNurse === true) {
            $('.error').css('display', 'none');
            $('.valid').css('display', 'block');
            console.log("Login correct, you're a nurse");
            window.location.href = '/nurse';
        } else if (isPatient === true) {
            $('.error').css('display', 'none');
            $('.valid').css('display', 'block');
            console.log("Login correct, you're a patient");
            window.location.href = '/patient';
        } else {
            $('.error').css('display', 'block'); // show error msg
            console.log("Login incorrect");
        }
    })
})