// Create three variables using var, let, and const and try to reassign them. Observe what happens.
// var x = 5;
// let y = 10;
// const z = 15;

// x = 50;
// y = 100;
// z = 150; //throw an error

// console.log(x);
// console.log(y);
// console.log(z);

// Trying redeclaring variables within different blocks and observe scope behavior.

function testScope() {
    if (true) {
        var a = "I am var";
        let b = "I am let";
        const c = "I am const";
    }
    console.log(a);
    console.log(b);// throw an error
    console.log(c);// throw an error
}

testScope();

//var is function scoped, can be access throughout a function.
// but let and const is block scoped.