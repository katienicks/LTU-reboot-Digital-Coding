

var preTipTotal = 32.58;

var tipPercentage = 10;

var wholePc = 100; 

var decimalTip = tipPercentage/wholePc;

var amountTip = preTipTotal*decimalTip;

var TipAndBill = preTipTotal+amountTip;

var TipAndBill2dp = TipAndBill.toFixed(2);

document.write (TipAndBill2dp);

