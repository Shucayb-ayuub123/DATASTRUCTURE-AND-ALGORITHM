// // let queue = []
// // queue.push("apple")
// // queue.push("orange")
// // queue.push("mango")
// // queue.push("water")

// // queue.shift()
// // queue.shift()
// // queue.shift()
// // console.log(queue);

// class queue2 {
//    constructor(){
//     this.item = []
//    }

//    push(element){
//      return this.item.push(element)
//    }

//    front() {
//     this.item[0]
//    }

//    isEmpty() {
//     return this.item.length == 0
//    }

//    #print(){
//     console.log(this.item);

//    }
//    display(){
//     this.#print()
//    }
// }

// let queu = new queue2()

// queu.push("A")
// queu.push("B")
// queu.push("C")
// queu.push("D")
// queu.push("E")
// queu.push("F")

// queu.display()

// let queu = [];

// queu.push("Ali");
// queu.push("Amina");
// queu.push("Hassan");
// queu.push("Maryan");

// console.log(`the queue  : ${queu}`);


// let person1 = queu.shift();
// let person2 = queu.shift();

// console.log(`the two served until now is ${person1} and ${person2}`);

// let Front = queu[0];

// console.log(`the front is ${Front}`);

// console.log(`the remaining queue  ${queu}`);

// let printer = []

// printer.push("Doc1")
// printer.push("Doc2")
// printer.push("Doc3")
// printer.push("Doc4")


// for (let index = 0; index < printer.length; index++) {
     
//     console.log(`the printed docx is ${printer[index]}`);

//     remove+=printer.shift()
    
    
// }

// if (printer.length == 0) {
    
//     console.log('the queoe is finish');
    
// }


let printerQueue = [];

// 1. Add documents to the queue
printerQueue.push("Doc1");
printerQueue.push("Doc2");
printerQueue.push("Doc3");

console.log("Queue after adding documents:", printerQueue);

// 2. Print (remove) the first document
let printedDoc = printerQueue.shift();
console.log("Printed:", printedDoc);
console.log("Queue after printing one document:", printerQueue);

// 3. Add "Doc4" to the queue
printerQueue.push("Doc4");
console.log("Queue after adding Doc4:", printerQueue);

// 4. Keep printing until the queue is empty
while (printerQueue.length > 0) {
  let doc = printerQueue.shift();
  console.log("Printing:", doc);
}

console.log("All documents printed, queue is now empty:", printerQueue);
