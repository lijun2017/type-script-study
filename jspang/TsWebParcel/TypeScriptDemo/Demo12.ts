class Person {
  // public name: string
  // constructor (name: string) {
  //   this.name = name
  // }
  // 构造函数自动执行
  constructor(public name: string) {}
}
// const person = new Person('lijun')
// console.log(person.name)

class Teacher extends Person {
  constructor (public age: number) {
    super('lijun')
  }
}
const teacher = new Teacher(18)
console.log(teacher.age)

export {}