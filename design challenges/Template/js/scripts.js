/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/

var button = document.querySelector('.hide-content');

button.addEventListener('click', function(e) {
    var contactLayout = document.getElementById("contact-layout");
    if (contactLayout.style.display === "none") {
        contactLayout.style.display = "flex";
        button.value = "HIDE CONTENT";
    } else {
        contactLayout.style.display = "none";
        button.value = "SHOW CONTENT";
    }
});