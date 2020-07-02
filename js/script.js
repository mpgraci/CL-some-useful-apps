//calculate tip
function calcTip(bill, tip) {
    
    //calculates tip and total
    var tipTotal = (bill/100)*tip;        
    var total = tipTotal + bill;

    //forces two decimal places
    tipTotal = (Math.round(tipTotal * 100) / 100).toFixed(2);  
    total = (Math.round(total * 100) / 100).toFixed(2);

    //outputs values to page
    document.getElementById("tipTotal").innerHTML = tipTotal;
    document.getElementById("total").innerHTML = total;
};

//button click
document.getElementById("calculateBtn").onclick = function() {
  
    //Test data
    //var bill = 123.45;
    //var tip = 15;

    //grabs data and parses as integer for future calculations
    var bill = parseFloat (document.getElementById("bill").value);
    var tip = parseFloat (document.getElementById("tipPerc").value);

    calcTip(bill, tip);  
};