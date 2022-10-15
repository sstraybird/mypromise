// 函数柯里化 函数反柯里化

// 判断变量的类型
// 常用的判断类型的方法有四种：
// 1.typeof 不能判断对象类型 typeof []  typeof {}
// 2.constructor  可以找到这个变量是通过谁构造出来的
// 3.instanceof 判断谁是谁的实例 __proto__
// 4.Object.prototype.toString.call()  缺陷就是不能细分是谁谁的实例

function isType(type, value) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
}
//
// console.log(isType('Array',[])) //type直接传字符串，容易出错

// 能不能将方法进行细分  isType  =>  isString isArray
// function isType(type) {
//     return function (value) {
//         return Object.prototype.toString.call(value) === `[object ${type}]`;
//     }
// }
//
// let isArray = isType('Array');
// console.log(isArray('hello'))
// console.log(isArray([]))
const currying = (fn,arr = []) => {
    let len = fn.length     //查看参数个数
    // console.log(len)
    return function (...args) {     //高阶函数
        let concatValue = [...arr,...args]
        if(concatValue.length < len){
            return currying(fn,concatValue)     //递归不停的产生函数
        }else {
            // console.log('参数before ...',concatValue)
            // console.log('参数',...concatValue)
            // console.log('方法',fn)
            return r= fn(...concatValue)      //执行原函数
        }
    }
}

let isArray = currying(isType)('Array')
let isString = currying(isType)('String')
console.log(isArray([]))
console.log(isArray('111'))
console.log(isString('111'))
