//calculate tip
function calcTip(bill, tip) {
    
    //calculates tip and total
    var tipTotal = (bill/100)*tip;        
    var total = tipTotal + bill;

    //forces two decimal places
    tipTotal = (Math.round(tipTotal * 100) / 100).toFixed(2);  
    total = (Math.round(total * 100) / 100).toFixed(2);
    
     if (isWhole(total) != true) {
        document.getElementById("roundBtn").style.display = "inline";
     }

    return [tipTotal, total];
};

//checks if number is whole number
function isWhole(number) {
    return number % 1 === 0;
 }

//button click
document.getElementById("calculateBtn").onclick = function() {
  
    var results = [0, 0];
    var comment = "";

    //grabs data and parses as integer for future calculations
    var bill = parseFloat (document.getElementById("bill").value);
    var tip = parseFloat (document.getElementById("tipPerc").value);

    //validates data and calls calcTip function
    var regexCurrency  = /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;    
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

    //outputs values to page
    document.getElementById("tipTotal").innerHTML = "$" + results[0];
    document.getElementById("total").innerHTML = "$" + results[1];
    document.getElementById("comment").innerHTML = comment;
};