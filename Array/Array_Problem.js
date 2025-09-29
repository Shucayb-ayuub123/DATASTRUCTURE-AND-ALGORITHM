let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr_reversed = arr.reverse()
// console.log(arr_reversed);

// let Max = Math.max(...arr)
// let Min = Math.min(...arr)

// let min = arr[0]
// let max = arr[0]

// for(let num of arr) {
//     if (num > max) max = num
//     if(num < min)  min = num

// }

// console.log( "Max " + max)
// console.log( "Min " + min)

// console.log(arr.includes(8))
// console.log(arr.includes(10))

// function reverseArray(arr) {
//   let new_arry = arr.reverse();

//   return new_arry;
// }

// console.log(reverseArray(arr));

// function findMaxMin(arr) {
//   let Max = Math.max(...arr);
//   let Min = Math.min(...arr);

//   return [Max, Min];
// }

// console.log(findMaxMin(arr));

// function searchElement(arr, target) {
//    return arr.indexOf(target)
// }

// console.log(searchElement(arr, 1));

// Pass 1:
//   Step 1: [3, 5, 8, 4, 2]
//   Step 2: [3, 5, 8, 4, 2]
//   Step 3: [3, 5, 4, 8, 2]
//   Step 4: [3, 5, 4, 2, 8]
// After Pass 1: [3, 5, 4, 2, 8]

// Pass 2:
//   Step 1: [3, 5, 4, 2, 8]
//   Step 2: [3, 4, 5, 2, 8]
//   Step 3: [3, 4, 2, 5, 8]
// After Pass 2: [3, 4, 2, 5, 8]

// Pass 3:
//   Step 1: [3, 4, 2, 5, 8]
//   Step 2: [3, 2, 4, 5, 8]
// After Pass 3: [3, 2, 4, 5, 8]

// Pass 4:
//   Step 1: [2, 3, 4, 5, 8]
// After Pass 4: [2, 3, 4, 5, 8]

// Final Result: [2, 3, 4, 5, 8]















// selection sort

// Pass 1: starting with [5, 3, 8, 4, 2]
//   Swapped 5 with 2 → [2, 3, 8, 4, 5]

// Pass 2: starting with [2, 3, 8, 4, 5]
//   Swapped 3 with 3 → [2, 3, 8, 4, 5]

// Pass 3: starting with [2, 3, 8, 4, 5]
//   Swapped 8 with 4 → [2, 3, 4, 8, 5]

// Pass 4: starting with [2, 3, 4, 8, 5]
//   Swapped 8 with 5 → [2, 3, 4, 5, 8]

// Final Result: [2, 3, 4, 5, 8]


// 🔹 5. Visualization

// For [8, 4, 2, 9, 5]:

// Step 1: [4, 8, 2, 9, 5]

// Step 2: [2, 4, 8, 9, 5]

// Step 3: [2, 4, 8, 9, 5] (9 stays)

// Step 4: [2, 4, 5, 8, 9] ✅















