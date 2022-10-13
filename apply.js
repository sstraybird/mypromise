function fn2(a,b) {
    console.log('fn2',this,arguments)
}

function fn3() {
    console.log('fn3',this,'3')
}
Function.prototype.apply = function(context,args){
    context = context ? Object(context):window
    console.log('context',context)
    context.fn = this
    console.log('context.fn',context.fn)
    console.log(args)
    if(!args){
        context.fn();
    }
    //利用数组的toString特性
    const str = 'context.fn('+args + ')';
    console.log(str)                        //context.fn(arguments[1],arguments[2])
    let r = eval(str)
    delete context.fn
    console.log('r',r)
    return r
}
fn2.call(fn3,[1,2,3,4])