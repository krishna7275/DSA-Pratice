// let arr = [10, 5, 2, 7, 3];

// function searchElement(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == n) {
//             return i;
//         }

//     }
//     return -1;
// }

// console.log(searchElement(arr, 5));
// console.log(searchElement(arr, 10));
// console.log(searchElement(arr, 3));
// console.log(searchElement(arr, 11));

// Count a negative nUmber
//  let arr= [4,-8,2,-3,6,-11,10];

//  function countNegative(arr){
//     let  count= 0;
//     for(let i =0; i < arr.length ; i++){
//         if(arr[i] < 0){
//             count++;
//         }
//     }
//     return count;
//  }
//  console.log(countNegative(arr));

// Find the largest number inarray
// let arr= [-4,-8,-2,-3,-6,-11,-10];
// function largestNumber(arr){
//     let largNum = - Infinity;
//     for(let i =0;i < arr.length;i++){
//         if (arr[i] > largNum) {
//             largNum = arr[i];
//         }
//     }
//     return `This is largest ${largNum}` //2
// }

// console.log(largestNumber(arr));

//find the Second largest
// let arr1= [1,,2,9,5,10,13,13];
// function seclargestNumber(arr1){
//     if (arr1.length < 2) {
//         return null;
//     }
//     let largNum = - Infinity;
//     let sencondlargNum = - Infinity;
//     for(let i =0;i < arr1.length;i++){
//         if (arr1[i] > largNum) {
//             sencondlargNum = largNum;
//             largNum = arr1[i];
//         }
//         else if(arr1[i] > sencondlargNum && arr1[i] != largNum){
//             sencondlargNum = arr1[i];
//         }
//     }
//     return `This is Second largest ${sencondlargNum}` //10
// }

// console.log(seclargestNumber(arr1));

// Print a star pattrens

//#1.........................................
// let n = 5;
// for(let i = 1;i<=n;i++ ){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row = row +" *";
//     }
//     console.log(row);
// }

//#2................................................................
// let n = 5;
// for(let i = 1;i<=n;i++ ){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row = row +" "+j;
//     }
//     console.log(row);
// }

//#3.......................................................................

//  let n = 5;
// for(let i = 1;i<=n;i++ ){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row = row +" "+i;
//     }
//     console.log(row);
// }

//#4................................................................
//  let n = 5;
// for(let i = n;i>=1;i--){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row = row +" "+j;
//     }
//     console.log(row);
// }

// Second approch .....................(n-i)
//  let n = 5;
// for(let i = 0;i<n;i++){
//     let row="";
//     for(let j=1;j<=(n-i);j++){
//         row = row +" "+j;
//     }
//     console.log(row);
// }

//#5.................................................................
//  let n = 5;
// for(let i = 0;i<n;i++){
//     let row="";
//     for(let j=1;j<=(n-i);j++){
//         row = row +" *";
//     }
//     console.log(row);
// }

//#6.......................................................................

//  let n = 5;
// for(let i = 0;i<n;i++){
//     let row="";
//     for(let j=0;j< n - (i+1);j++){
//         row = row +" ";
//     }
//     for(let k =0;k <i+1; k++){
//         row = row +"*";
//     }
//     console.log(row);
// }

// #7 ...................................................................................

//  let n = 5;
// for(let i = 0;i<n;i++){
//     let row="";
//     let toggle =1;
//     for(let j=0;j <= i;j++){
//         row = row + toggle;
//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else{
//             toggle = 1;
//         }
//     }
//     console.log(row);
// }

// Count the number of digith's

// let n=-54;
// let count = 0;

// function Count(n){
//     if(n == 0){
//         return 1;
//     }
// // change the negative number to positive
//     n = Math.abs(n);
//     while(n>0){
//         n = Math.floor(n/10);
//         count++;
//     }
//     return count;
// }

// console.log(Count(n));

/// Revese the number
//  let n=-1445491;    // Let's check if this is a palindrome

//  let rem =0;
//  let res = 0;
//  n = Math.abs(n);
//  while (n>0) {
//     rem = n % 10;
//     res = (10*res) + rem; // consider res = 4 the res= (4*10)+3 means 40+3 then its become 43
//     n = Math.floor(n/10); // Use Math.floor to remove the decimal
//  }
//  console.log(res);

//Let's check if this is a palindrome
// let n = 1221;
// let nCopy = n;
// let reminder = 0;
// let result = 0;
// n = Math.abs(n);
// function findPalindrome(n) {
//   while (n > 0) {
//     reminder = n % 10;
//     result = (10 * result) + reminder; // consider res = 4 the res= (4*10)+3 means 40+3 then its become 43
//     n = Math.floor(n / 10); // Use Math.floor to remove the decimal
//   }
//   if (result == nCopy) {
//     return result;
//   } else {
//     return "this is not palindrome";
//   }
// }
// console.log(findPalindrome(n));


// let Reverse the negative Numbre 

// let n = -1221;
// let nCopy = n;
// let reminder = 0;
// let result = 0;
// n = Math.abs(n);
// function findPalindrome(n) {
//   while (n > 0) {
//     reminder = n % 10;
//     result = (10 * result) + reminder; // consider res = 4 the res= (4*10)+3 means 40+3 then its become 43
//     n = Math.floor(n / 10); // Use Math.floor to remove the decimal
//   }
//   // if (result == nCopy) {
//     return (nCopy <0)?-result:result;
//   // } else {
//   //   return "this is not palindrome";
//   // }
// }
// console.log(findPalindrome(n));

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
    
//     let xCopy = x;
//     let last =0;
//     let result = 0;
//     x = Math.abs(x);

//     while(x > 0){
//         last = x % 10;
//         result = (10 * result) + last;
//         x = Math.floor(x / 10);
//     }
     
//     let limit = 2**31;
//     if(result > limit  || result < -limit){
//         return 0;
//     }
     
//      return (xCopy <0)?-result:result;
// };


//Remove Duplicates from Sorted Array
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let x  =0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > nums[x]){
//             x = x + 1;
//             nums[x] = nums[i];
//         }
//     }
//     return x + 1;
// };

//27. Remove Element

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//     let x = 0;
//     for(let i =0; i < nums.length ; i++){
//         if (nums[i] != val){
//             nums[x] =  nums[i];
//             x = x + 1;
//         }
//     }
//     return x
// };

//Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     let len = s.length;
//     let halfLen = Math.floor(len/2);

//     for(let i =0 ; i < halfLen ; i++){
//         let temp = s[i];
//         s[i] = s[len-1-i];
//         s[len-1-i] = temp;
//     }
// };

// context : 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n


// var merge = function(nums1, m, nums2, n) {
//     let p1 = m-1;
//     let p2 = n-1;

//     for(let i = (m+n)-1; i =>0; i--){
//         if(p2 < 0)break;                           // there is can be second approch
//         if(p1 >= 0 && nums1[p1] > nums2[p2]){
//             nums1[i] = nums1[p1];
//             p1--;
//         }
//         else{
//             nums1[i] = nums2[p2];
//             p2--;
//         }
//     }
// };
//485. Max Consecutive Ones
// var findMaxConsecutiveOnes = function(nums) {
//     let maxCount = 0;
//     let currentCount = 0;
    
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === 1) {
//             currentCount++;
//             if(currentCount > maxCount) {
//                 maxCount = currentCount;
//             }
//         } else {
//             currentCount = 0;
//         }
//     }
    
//     return maxCount;
// };

// 268. Missing Number
// var missingNumber = function(nums) {
//     let n = nums.length;
//     let totalSum = (n*(n+1))/2;
//     let partialSum = 0;
//     for(let i=0; i < nums.length; i++){
//         partialSum = partialSum + nums[i];
//     }
//     return totalSum - partialSum;
// };

// 136. Single Number
// var singleNumber = function(nums) {
//     let Xor = 0;
//     for(let i=0;i<nums.length;i++){ 
//         Xor = Xor ^ nums[i]
//     }
//     return Xor;
// };

// Sum of No. in Recurrion in js

// let n = 5;
// function sumNum(n){
//     if(n < 1){
//         return 0;
//     }
//         return n + sumNum(n-1);
// }

// console.log(sumNum(n));/

//Factorail in Recursion 

// let n = 5;
// function fact(n){
//     if(n < 1){
//         return 1;
//     }
//         return n * fact(n-1);
// }

// console.log(fact(n));

// 231. Power of Two using Recursion
// var isPowerOfTwo = function(n) {
//     if(n === 1){
//         return true;
//     }
//     else if(n<1 || (n%2 !== 0)){
//         return false;
//     }
//     return isPowerOfTwo(n/2);
// };

// Frist approch to find fibonacci Number is iterative Method
// var fib = function(n) {
//     if(n === 1) return 1;
//     num1 = 0;
//     num2 = 1;
//     num3 = 0;
//     for(let i = 2; i <= n;i++){
//         num3 = num1 + num2;
//         num1 = num2;
//         num2 = num3;
//     }
//     return num3; 
// }; 


// 509. Fibonacci Number Using Recursion

// var fib = function(n) {
//     if(n<=1){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// };