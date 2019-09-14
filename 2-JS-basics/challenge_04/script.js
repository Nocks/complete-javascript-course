/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to
the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the
full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var john = {
  fullName : "John Smith",
  mass: 70,
  height: 1.58496,
  calcBMI: function() {
    // BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter)
    return this.mass / Math.pow(this.height, 2);
  }
}

var mark = {
  fullName : "Mark Fish",
  mass: 80,
  height: 1.58496,
  calcBMI: function() {
    // BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter)
    return this.mass / Math.pow(this.height, 2);
  }
}

if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI than ' + john.fullName + " with " + mark.calcBMI().toFixed(2));
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + ' has a higher BMI than ' + mark.fullName + " with " + mark.calcBMI().toFixed(2));
} else {
  console.log("Both " + john.fullName + " and " + mark.fullName + " have the same BMIs.");
}
