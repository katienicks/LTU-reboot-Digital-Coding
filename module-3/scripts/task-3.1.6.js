

var preTipTotal = 32.58; //bill amount//

var tipPercentage = 10; //% tip//

var wholePc = 100;  //100%//

var decimalTip = tipPercentage/wholePc; //% Tip as a decimal//

var amountTip = preTipTotal*decimalTip; //Tip as a £//

var TipAndBill = preTipTotal+amountTip; //Tip plus bill/

var TipAndBill2dp = TipAndBill.toFixed(2); //Tip plus bill, rounded to 2 decimal places/

document.write (TipAndBill2dp);

