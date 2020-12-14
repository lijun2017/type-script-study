// class Person {
//   public readonly _name:string // 只读属性
//   constructor(name: string) {
//     this._name = name
//   }
// }

// const person = new Person('lijun')
// // person._name = 'jack'
// console.log(person._name)


abstract class Girl {
  abstract skill()
}

class Waiter extends Girl{
  skill () {
    console.log('大爷，请喝水')
  }
}

class BaseTeacher extends Girl{
  skill () {
    console.log('大爷，来个泰式按摩')
  }
}

class SeniorTeacher  extends Girl{
  skill () {
    console.log('大爷，来个spa全身按摩')
  }
}

export {}
