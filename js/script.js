//calculate tip
function calcTip(bill, tip) {
    
    //calculates tip and total
    var tipTotal = (bill/100)*tip;        
    var total = tipTotal + bill;

    //forces two decimal places
    tipTotal = (Math.round(tipTotal * 100) / 100).toFixed(2);  
    total = (Math.round(total * 100) / 100).toFixed(2);

    return [tipTotal, total];
};

//button click
document.getElementById("calculateBtn").onclick = function() {
  
    var results = [0, 0];

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

    //outputs values to page
    document.getElementById("tipTotal").innerHTML = results[0];
    document.getElementById("total").innerHTML = results[1];
};