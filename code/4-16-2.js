console.log(1+ "2"+"2");
console.log(1+ +"2"+"2");
console.log("A"- "B"+"2");
console.log("A"- "B"+2);

var a;
console.log(a);
console.log(Math.max.call(null,[1,2,3,0]));
console.log(Math.max.apply(null,[1,2,3,0]));

console.log(typeof (function() {console.log("Hello World!")})())
//先执行立即执行函数 输出 Hello world 执行完之后被销毁 ，然后无返回值，类型为 undefined

//keydown 不是由鼠标触发的事件

// 遍历 for in 枚举
// .forEach是迭代，也就是遍历，但是应该用ES7里面的entries。for(let[key, value] of my_data.entries()) { `${key}+${value}`}。

// angularjs1指令中compile 主要用来绑定 DOM