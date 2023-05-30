// 1.
console.log("1. this in normal function and arrow function");
console.log(this);

const obj = {
    fn: function(){
        console.log(this);
    },
    fn2: () => {
        console.log(this);
    }
}
obj.fn(); //obj
obj.fn2(); //window

// 2.
console.log("2. this");

function x(){
    console.log(this);
    function y(){
        console.log(this)
        function z(){
            console.log(this);
        }
        z();
    }
    y(); 
}
x();

// 3.
console.log("-----------------3.----------------");
const person ={
    name: "Akshay"
}
const person2 = {
    name: "Simran"
}
function xx(){
    console.log(this);
}
xx();
xx.call(this);
xx.call(person);
xx.call(person2);   

// 4.
console.log("-----------------4.----------------");
const person11 = {
    name: "Akshay",
    print: function(){
        console.log(this);
    }
}
const person22 = {
    name: "Simran"
}

person11.print();
person11.print.call();
person11.print.call(this);
person11.print.call(person22); 