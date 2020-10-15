// private 私有的，类内部调用
// protected 受保护的，内部和子类可以使用
// public 类的内部和外部都可以使用

// 类的内部和类的外部
class Person {
  protected name: string
  private age: number = 18
  public sayHello () {
    console.log(this.name + ' say Hello')
  }
}

class Teacher extends Person {
  public sayBye () {
    this.name
  }
}

const person = new Person()
person.name = 'lijun'
console.log(person.age)
console.log(person.name)
person.sayHello()

export {}