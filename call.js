function fn1() {
    console.log(this,arguments)
}
// call的特点
// 1)可以改变我们当前函数的this指向
// 2)还会让当前函数执行
fn1.call();     //此时this指向window
fn1.call('hello')
fn1.call('hello','1','2')

function fn2(a,b) {
    console.log('fn2',this,arguments)
}

function fn3() {
    console.log('fn3',this,'3')
}
Function.prototype.call = function(context){
    context = context ? Object(context):window
    console.log('context',context)
    context.fn = this
    console.log('context.fn',context.fn)
    let args = []
    for(let i=1;i<arguments.length; i++){
        args.push('arguments['+i +']')      // ['arguments[1]','arguments[2]']
    }
    console.log(args)
    //利用数组的toString特性
    const str = 'context.fn('+args + ')';
    console.log(str)                        //context.fn(arguments[1],arguments[2])
    let r = eval(str)
    delete context.fn
    console.log('r',r)
    return r
}
fn2.call(fn3,1,'2')
console.log("------------------")
fn2.call.call.call.call.call.call(fn3)      //call会改变当前的this指向,此时this指向fn3，this()执行fn3()

