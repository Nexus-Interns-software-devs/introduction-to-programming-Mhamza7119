/**reverse a string
@param {string} text
@returns {string} 
*/
function reverseString (text) {
    return text.split("").reverse().join("");
}


/**count word 
@param {string} text
@returns {number}
*/
function countword(text) {
    return text.trim().split(" ").length;
}

/** CHECK IF TEXT IS a palindrome
 @param {string} text
 @returns {boolean} 
 */
function ispalindrome (text) {
    return text === 
text.split("").reverse().join("");
}

/** check if the number is prime
 @param {number} n
 @returns {boolean}
 */
function isprime(n) {
    if (n <=1) {
        return false
    }
    for (let i =2; i<n; i++) {
        if (n % i === 0){
            return false
        }
    }
    return true
}

/** calculate factorial
 @param {number} n
 @returns {number}
 */
function factorial(n) {
    let result =1;

    for (let i=1; i<=n; i++) {
        result = result *i;
    }
    return result;
}

/** find fibonacci number
 @param {number} n
 @returns {number}
 */
function fibonacci (n) {
    let a = 0;
    let b = 1;

    for (let i =0; i<n; i++) {
        let temp =a;
        a =b;
        b =temp + a;
    }
    return a;
}

/** remove duplicate items
@param {array} arr
@returns {array} 
*/
function removeduplicate(arr) {
    return [...new Set(arr)];
}

/** find median
@param {array} numbers
@returns {number}
*/
function findmedian(numbers) {
    numbers.sort((a, b) => a - b);

    let middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return (numbers[middle - 1] + numbers[middle]) / 2;
    }

    return numbers[middle];
}

/** validate email
@param {string} email
@returns {boolean}
 */
function isvalidemail(email) {
    return email.includes("@");
}

/** validate phone number
@param {string} phone
@returns {boolean}
 */ 

function isvalidphone(phone) {
    return phone.length ===11;
}

// let test the function
console.log(reverseString("good"));
console.log(countword("to see you"));
console.log(ispalindrome("sir"));

console.log(isprime(8));
console.log(factorial(6));
console.log(fibonacci(7));

console.log(removeduplicate([2,3,3,4]));
console.log(findmedian([20,30,40]));

console.log(isvalidemail("test@gmail.com"));
console.log(isvalidphone("09015304270"));
