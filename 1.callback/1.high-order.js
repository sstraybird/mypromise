// 什么是高阶函数：
// 1.如果一个函数的参数是一个函数 (回调函数就是一种高阶函数)
// 2.如果一个函数返回一个函数 当前这个函数也是一个高阶函数

// 高阶函数的应用场景： 为了稍后写promise做铺垫 

// 写了一个业务代码，扩展当前的业务代码
function say(a,b){
    console.log('say',a,b);
}

// 给某个方法 添加一个方法在他执行之前调用
// 而这个方法所有函数都有,可以把这个方法扩展到Function.prototype
Function.prototype.before = function (callback) {
    // let that=this    //谁调用before，this就是谁 ,这是this就是指向say
    // return function () {
    //     callback()
    //     that()
    // }
    //关于arguments:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
    return (...args)=>{ // 剩余运算符， ...把所有参数变成数组
        // arguments    箭头函数没有this，想上找this, 也没有arguments
        callback();
        this(...args); // 展开运算符  apply的用法
    //    ...有两个作用
    //    1.当是函数的参数的时候，把所有参数组成数组
    //    2.在函数调用的时候，把参数依次传到另一个函数中
    }
}
let beforeSay = say.before(function(){
    console.log('before say')
})
beforeSay('hello','world');

function say2(a,b) {
    console.log("say2")
}
let beforesay2 = say2.before(function () {
    console.log("before say2")
})
console.log("-------")
beforesay2("aa","bb")
