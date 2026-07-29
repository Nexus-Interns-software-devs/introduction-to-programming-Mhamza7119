//setup
const secretnumber =50;

// function 
function checkguess(guess) {
    if (guess > secretnumber){
        return "Too high";
    } else if (guess < secretnumber) {
        return "Too low";
    } else {
        return "correct";
    }
} 


//let test the function
console.log("secret number:" + secretnumber);
console.log("guess 60:" + checkguess(60));
console.log("guess 40:" + checkguess(40));
console.log("guess 50:" + checkguess(50));
console.log("guess 100:" + checkguess(100));
console.log("1:" + checkguess (1));



