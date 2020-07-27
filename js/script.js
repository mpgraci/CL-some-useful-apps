var results = [0, 0];
var comment = "";
var bill = 0;
var tip = 0;

//calculates tip
function calcTip(bill, tip) {
    
    //calculates tip and total
    var tipTotal = (bill/100)*tip;        
    var total = tipTotal + bill;

    //forces two decimal places
    tipTotal = twoDec(tipTotal);  
    total = twoDec(total);
    
    if (isWhole(total) != true) {
        document.getElementById("roundBtn").style.display = "inline";
    } else {
        document.getElementById("roundBtn").style.display = "none";
    }

    return [tipTotal, total];
};

//checks if number is whole number
function isWhole(number) {
    return number % 1 === 0;
 }

 //forces two decimal places
 function twoDec(n) {
    n = (Math.round(n * 100) / 100).toFixed(2);
    return n;
 };

 //displays results on page
function displayResults(finalTip, finalTotal, finalComment) {
    document.getElementById("tipTotal").innerHTML = "$" + finalTip;
    document.getElementById("total").innerHTML = "$" + finalTotal;
    document.getElementById("comment").innerHTML = finalComment;  
};

//calculate button click
document.getElementById("calculateBtn").onclick = function() {
  
    //grabs data and parses as integer for future calculations
    bill = parseFloat (document.getElementById("bill").value);
    tip = parseFloat (document.getElementById("tipPerc").value);

    //validates data and calls calcTip function
    var regexCurrency  = /^\$?\-?([1-9]{1}[0-9]{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\-?\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\(\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))\)$/;    
    var regexWhole  = /^[1-9]\d*$/;    

    if (regexCurrency.test(bill)) {
        if (regexWhole.test(tip)) {
            results = calcTip(bill, tip);         
        } else {
            alert("Enter a valid tip percentage (hint: whole numbers)!");
        };        
    } else {        
        alert("Enter a valid dollar amount!");
    };   
    
    //checks tip percentage and adds commentary
    if (tip > 24) {
        comment = "Woah, slow down money bags!";
    }
    else if (tip > 14) {
        comment = "Just average? About what I expected from you.";
    }
    else {
        comment = "That's it?! Did they spit in your food?";
    }    
    
    displayResults(results[0], results[1], comment);   
    document.getElementById("clearBtn").style.display = "inline"; 
};

//clear button click
document.getElementById("clearBtn").onclick = function() {
    document.getElementById("roundBtn").style.display = "none";
    document.getElementById("clearBtn").style.display = "none";

    document.getElementById("bill").value = '';
    document.getElementById("tipPerc").value = '';

    document.getElementById("tipTotal").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("comment").innerHTML = "Did you type something wrong? Guess you really do need this calculator.";
};

//round button click
document.getElementById("roundBtn").onclick = function() {
    var newTotal = twoDec(Math.ceil(results[1]));    
    var newTip = twoDec(newTotal - bill);            
    comment = "Don't like decimals? Or are you paying in cash like a neanderthal?";

    displayResults(newTip, newTotal, comment);
};