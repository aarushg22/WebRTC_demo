"use strict";

$(document).ready(function() {

    $("#submit").click(function (event) {

        /// prevent PageReLoad
        event.preventDefault();

        /// Check which user we are
        var isNurse = $("#username").val().toLowerCase() === "nurse";
        var isPatient = $("#username").val().toLowerCase() === "patient";

        /// Send the user to its page
        if (isNurse === true) {
            /// Send to the nurse page
            $(".error").css("display", "none");
            $(".valid").css("display", "block");
            console.log("Login correct, you're a nurse");
            window.location.href = "/nurse";
        } else if (isPatient === true) {
            /// Send to the patient page
            $(".error").css("display", "none");
            $(".valid").css("display", "block");
            console.log("Login correct, you're a patient");
            window.location.href = "/patient";
        } else {
            /// Display an error
            $(".error").css("display", "block"); // show error msg
            console.log("Login incorrect");
        }
    })
})