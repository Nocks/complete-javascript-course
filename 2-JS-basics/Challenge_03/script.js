
/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator
(as a function). He likes to tip 20% of the bill when the bill is less than
$50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var johnBills = [124, 48, 268];

function tipCalculator(bills) {

  var tips = [];
  var finalPaidAmounts = [];

  for (var i = 0; i < bills.length; i++) {

    var tip = 0;
    switch(true) {
      case (bills[i] < 50):
        // tip 20% of the bill when the bill is less than $50
        tip = bills[i] * 0.2;
        tips.push(tip.toFixed(2));
        finalPaidAmounts.push((tip + bills[i]).toFixed(2));
        break;
      case (bills[i] >= 50 && bills[i] < 200):
        // tip 15% when the bill is between $50 and $200
        tip = bills[i] * 0.15;
        tips.push(tip.toFixed(2));
        finalPaidAmounts.push((tip + bills[i]).toFixed(2));
        break;
      case (bills[i] > 200):
        // tip 10% if the bill is more than $200
        tip = bills[i] * 0.1;
        tips.push(tip.toFixed(2));
        finalPaidAmounts.push((tip + bills[i]).toFixed(2));
        break;
      default:
      // anything elsse, no tip.
        tips.push(0);
    }
  }
  console.log("Tips: " + tips);
  console.log("Final paid amounts: " + finalPaidAmounts);
}

tipCalculator(johnBills)
