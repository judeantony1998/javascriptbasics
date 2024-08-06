//1) Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

var arr1=[3,4,5,6,7,8];
if (arr1[0]%1 ===0) {
    console.log('value is prime')
} 
else {
    console.log('value is not prime')
};

//2)  Write a JavaScript program to find the most frequent item of an array

var num = [1, 1, 1, 2, 3, 4, 5];
var frequency = {};  // Object to store the frequency of each number

// Variables to keep track of the most frequent number and its count
var maxNum = null;
var maxCount = 0;

for (var i = 0; i < num.length; i++) {
    var item = num[i]; // Current number in the loop

    // If the number is not yet in the frequency object, add it with a count of 1
    if (!frequency[item]) {
        frequency[item] = 1; // Example: frequency[1] is set to 1
    } else {
        // If the number is already in the object, increment its count
        frequency[item]++; // Example: frequency[1] is incremented to 2
    }

    // Check if the current number's count is greater than maxCount
    if (frequency[item] > maxCount) {
        maxCount = frequency[item]; // Update maxCount to this number's count
        maxNum = item; // Update maxNum to this number
    }
}

// Output the most frequently occurring number and its count
console.log(maxNum + ' appears the most frequently, ' + maxCount + ' times');


//3) Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, 
//and display the message to the screen as odd or even.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}


//4) Write a JavaScript program to find the sum of squares of the elements of an array.

var num = [1, 1, 2, 2, 3, 4, 5];
var sumOfSquares = 0;
for (var i = 0; i < num.length; i++) {
    sumOfSquares += num[i] * num[i];
}

console.log('The sum of squares is:', sumOfSquares);
