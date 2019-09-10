//document.write("**JS Starts**<br>");

 function $(thing)
{
    return document.getElementById(thing);
}


//Nav
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}



//Calculation alert
function guessAge() {
//Define inputted name
var yourName = $('yourName').value;



 //Age calculator
    var now = new Date();
    //document.write(now);

    var dayOfBirth = $('dayOfBirth').value;
    var monthOfBirth = $('monthOfBirth').value;
    var yearOfBirth = $('yearOfBirth').value;

    var yourBirthday = new Date(yearOfBirth,monthOfBirth-1,dayOfBirth,0,0,0,0 );
    var millisec = now - yourBirthday;
    var yourAge = (millisec/86400000)/365;
    var yourAge = Math.round(yourAge);
        alert ("Hi " + yourName + "!" + " You are " + yourAge + " years old!");
}

//document.write("<br>**JS Ends**");