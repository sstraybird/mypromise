function Animal() { //构造函数
    this.type = "哺乳类"
}

Animal.prototype.type="哺乳"
Animal.prototype.a = 2

let animal = new Animal()
delete animal.type
console.log(animal.type)
console.log(animal.__proto__.__proto__ === Object.prototype)
console.log(Animal.prototype.constructor === Animal)

console.log(Object.prototype.__proto__)

console.log(Animal.prototype)

console.log(Function.__proto__ === Function.prototype)      //函数（对象）的原型链指向函数（类）的原型,强制指定
console.log(Object.__proto__ === Function.prototype)
console.log(Object.__proto__ == Function.__proto__)

console.log('a' in animal)