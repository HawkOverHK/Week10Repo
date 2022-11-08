// for (let i = 0; i < 1000000; i++) {console.log(i);}
// for (let i = 1;  i <= 10; i++ ){
//     console.log(2 ** i);
// }
// let n = 1
// while (n <=10){
//     console.log(2 ** n)
//     n = n + 1
// }
// let input;
// do{
// input = prompt ("what is your name?");
// //prompt always returns string
// //convert input to number
// console.log(Number(input));
// } while (!isNaN(Number(input)));

// // alert("Hello" + input);
// alert(`Hello ${input}`);
let fruits = ["Apple","Banana"];
fruits.push("Orange")
console.log(fruits)

fruits.unshift("Mango");
console.log(fruits)
fruits.shift("Mango")
console.log(fruits)