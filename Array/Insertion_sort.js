// function sorting(arr) {
//     let n  = arr.length

//     for (let i = 0; i < n-1; i++) {

//         for (let j = 0; j < n-i-1; j++) {

//             if (arr[j] > arr[j+1]) {

//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1]  = temp
//             }

//         }

//     }

//     return arr
// }

// console.log(sorting([12, 4, 7, 9, 1, 15]));

// function findMaxmin(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }

//   return { min, max };
// }

// console.log(findMaxmin([12, 4, 7, 9, 1, 15]));


// let names = ["Ali", "Zara", "Mohamed", "Bilan"];

// names.sort()

// console.log(names)


// function BubbleSort(arr , order) {
//     let n =arr.length

//   if(order == "asc"){
//     for (let i = 0; i < n-1; i++) {
//        for (let j = 0; j < n-i-1; j++) {
          
//         if (arr[j] > arr[j+1]) {
            
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]  = temp
//         }
        
//        }
        
//     }

// }

//  if (order == "desc") {
//      for (let i = 0; i < n-1; i++) {
//        for (let j = 0; j < n-i-1; j++) {
          
//         if (arr[j] < arr[j+1]) {
            
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]  = temp
//         }
        
//        }
        
//     }

//  }

//     return arr
// }


// console.log(BubbleSort([12, 4, 7, 9, 1, 15] , "desc"))

let nums = [12, 4, 7, 9, 1, 15]
console.log("Ascending Order");

console.log(nums.sort((a , b) => a - b))
console.log("descending Order");
console.log(nums.sort((a , b) => b - a))