// Bubble_Sort
function BubbleSort(arr){
  let n = arr.length

  for (let i = 0; i < n-1; i++) {

     for (let j = 0; j < n-i-1; j++) {
    
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp 
      }

      
     }
    
  }

  return arr
}

console.log(BubbleSort([4,2,7,9,10,3,5]));
// Seleection_Sort

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
