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


// function reverse2(element) {
//     stack2 = []
   
//     for (const char of element) {
//         stack2.push(char)
//     }
    

//     let reverse = ""

//     while(stack2.length > 0) {
//         reverse+=stack2.pop()
//     }

//     return reverse
// }

// console.log(reverse2("shucayb"));



class BrowserHistory {
  constructor(homepage) {
    this.backStack = [];
    this.forwardStack = [];
    this.current = homepage;
  }

  visit(page) {
    this.backStack.push(this.current);
    this.current = page;
    this.forwardStack = []; // clear forward history
    console.log(`Visited: ${page}`);
  }

  back() {
    if (this.backStack.length === 0) {
      console.log("No pages in back history");
      return;
    }
    this.forwardStack.push(this.current);
    this.current = this.backStack.pop();
    console.log(`Went back to: ${this.current}`);
  }

  forward() {
    if (this.forwardStack.length === 0) {
      console.log("No pages in forward history");
      return;
    }
    this.backStack.push(this.current);
    this.current = this.forwardStack.pop();
    console.log(`Went forward to: ${this.current}`);
  }

  getCurrentPage() {
    return this.current;
  }
}

// Example usage:
const browser = new BrowserHistory("homepage.com");

browser.visit("page1.com");
browser.visit("page2.com");
browser.back();       // Goes back to page1.com
browser.back();       // Goes back to homepage.com
browser.forward();    // Goes forward to page1.com
browser.visit("page3.com"); // Visiting a new page clears forwardStack
browser.back();       // Goes back to page1.com

