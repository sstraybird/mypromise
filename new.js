function Animal(type) {
    this.type = type    // 实例上的属性
    // 如果当前构造函数返回的是一个引用类型 需要把这个对象返回
    // 函数也一样要返回
    // return {name :'zhg'}    // 如果构造函数返回的是对象，new 之后拿到的是构造函数的返回值
}

Animal.prototype.say = function () {
    console.log('say')
}

function mockNew() {
    console.log(arguments)
    //Construcotr => Animal 剩余的arguments就是其他的参数
    let Constructor = [].shift.call(arguments)      //arguments改变this，执行[].shift方法
    console.log(Constructor)
    // console.log(Object.create(null))        //空对象，没有原型链
    let obj = {};   //返回的结果
    obj.__proto__ = Constructor.prototype       //返回结果的原型链指向构造函数的原型
    let r = Constructor.apply(obj,arguments)            //执行构造函数
    console.log(obj)
    return r instanceof Object ? r:obj
}

// let animal = new Animal('哺乳类')
let animal = mockNew(Animal,'哺乳类')
console.log(animal.type)
animal.say()