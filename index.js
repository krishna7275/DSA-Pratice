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

 let n = 5;
for(let i = 1;i<=n;i++ ){
    let row="";
    for(let j=1;j<=i;j++){
        row = row +" "+i;
    }
    console.log(row);
} 