var a  = [];
for(let i = 0; i < 10; i++){
    console.log(i);
    a[i] = ()=>{
        console.log(i);
    }
}

a[5]();  // 5
a[8]();  // 8

// console.log(b);    //ReferenceError: b is not defined
// let b = 2;

//在 let/const 声明变量之前就使用 变量 会抛出 ReferenceError 错误

{
    let x = 9;
}
// console.log(x); /ReferenceError: x is not defined
