// privete 主要用于set和get方法
class XiaoJieJie {
  constructor(private _age:number) {}
  get age() {
    return this._age - 10
  }

  set age(age: number) {
    this._age = age + 20
  }
}

const dajiao = new XiaoJieJie(28)
dajiao.age = 25
console.log(dajiao.age)

class Girl {
  // sayLove() {
  //   return 'I love you!'
  // }
  static sayLove() {
      return 'I love you!'
    }
}

// const girl = new Girl()
// console.log(girl.sayLove())
console.log(Girl.sayLove())

export {}