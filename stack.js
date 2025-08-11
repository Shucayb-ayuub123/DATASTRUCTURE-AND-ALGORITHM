// let stack = []

// // add element
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)


// console.log(stack);

// // removing element

// console.log(`the top element is : ${stack[stack.length-1]}`)

// console.log(stack.pop());


// // Peeking element

// console.log(stack);

// // checking stack 

// console.log(stack.length==0);



// console.log(stack2);
// console.log(stack2.pop());


function reverse2(element) {
    stack2 = []
   
    for (const char of element) {
        stack2.push(char)
    }
    

    let reverse = ""

    while(stack2.length > 0) {
        reverse+=stack2.pop()
    }

    return reverse
}

console.log(reverse2("shucayb"));



