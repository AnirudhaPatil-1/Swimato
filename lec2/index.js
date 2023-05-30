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
