let obj = {
    name:'zhg'
}

function fnc(name,age) {
    console.log(this)
    // console.log(this.name + '养了 ' + name + " 多大了: " + age)
}
// 1) bind方法可以绑定this指向,绑定参数
// 2) bind方法返回一个绑定后的函数（高阶函数)
// 3) 如果绑定的函数被new了，当前函数的this就是当前的实例
// 4) new出来的结果可以找到原有类的原型
Function.prototype.bind = function(context){
    let that = this;        //that指向调用者fn
    let bindArgs = Array.prototype.slice.call(arguments,1)  // ['猫']
    function Fn() {}        // Object.create原理
     function fBound() {    //this
        let args = Array.prototype.slice.call(arguments);
        console.log(this)
        return that.apply(this instanceof fBound?this:context,bindArgs.concat(args))      //改变this并且执行that=fn方法
    }
    // fBound.prototype = this.prototype
    Fn.prototype = this.prototype
    fBound.prototype = new Fn()
    console.log('fboudn.prototype',fBound.prototype)
    return fBound
}
fnc.prototype.flag = '哺乳类'
let bindFn = fnc.bind(obj,'猫')
// bindFn(9)
let instance = new bindFn(9)
console.log(instance.flag)