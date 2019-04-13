// ---------1---------------------

// var a = [];
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     a[i] = function () {
//         console.log(i, '----------');
//     }
// }

// a[5]();  // 10
// a[8]();  //10

// console.log(b);  //undefined

// var b = 2;  

// 在 var 声明变量之前使用变量 ，undefined

// ------------2---------------
var a = 99;

f();  
console.log(a);
function f(){
    console.log(a);
    var a = 10;
    console.log(a);
}

// f 是函数 ，虽然调用在定义的前面，但是函数声明会提升到作用域的顶部（仅是函数声明）
//但当我们调用的时候 a 还没有定义 所以 先输出 undefined

{
    var x = 9;
}
console.log(x);