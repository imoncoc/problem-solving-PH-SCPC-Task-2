/*
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(str){
    let ans = "";

    for (let i = str.length - 1; i >= 0; i--) {
      ans += str[i];
    }
    return ans;
}

const str = "hello world";

console.log(reverseString(str));
*/

/*
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

let arr = [2, -5, 10, -3, 7];

function totalPositiveSum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            total += arr[i];
        }
    }
    return total;
}

const totalSum = totalPositiveSum(arr);
console.log(totalSum);
*/

/*
// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function mostFrequent(array){
    let frequentElement = array[0];
    let mostCount = 1;
    for(let i = 1; i < array.length; i++){
        let curCount = 1;
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                curCount++;
            }
        }
        if (curCount > mostCount) {
          frequentElement = array[i];
          mostCount = curCount;
        }
    }
    return mostCount;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequentElement = mostFrequent(array);
console.log(mostFrequentElement);
*/

/*
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTheTarget(arr, target){
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = i+1; j < len; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }

    return 1;
}

const arr = [1, 3, 6, 8, 11, 15];
console.log(findTheTarget(arr, 9));
*/

