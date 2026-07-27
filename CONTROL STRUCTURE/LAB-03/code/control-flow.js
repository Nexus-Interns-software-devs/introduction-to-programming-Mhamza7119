// simple If/Else Statement
let number =50;

if(number>=0){
    console.log("the number is positive,");

} else{
    console.log("the number is negative,");

}


//Multiple condition (else if)
let score =80;
let grade;

if (score>=90) {
    console.log("Grade:A");  
} else if(score>=80) {
    console.log("Grade:B"); 
} else if(score>=70) {
    console.log("Grade:C");
} else if (score>=60) {
    console.log("Grade:D");
} else {
    console.log("Grade:F");
}

// Nested Condition
let age =25;
let isRegistered =true;

if (age >= 18) {
    if (isRegistered) {
        console.log("You are eligible to vote and Registered!");
    } else {
        console.log("You are eligible to vote but not Registered.");
    }
} else {
    console.log("You are not eligible to vote.");
}
