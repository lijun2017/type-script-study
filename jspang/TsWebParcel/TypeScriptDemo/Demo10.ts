class Lady {
  content = 'Hi, 帅哥！'
  sayHello () {
    return this.content
  }
}

class XiaoJiejie extends Lady {
  sayHello () {
    return super.sayHello() + '你好'
  }
  sayLove() {
    return 'I love you'
  }
}

const goddess = new XiaoJiejie()
console.log(goddess.sayHello())
console.log(goddess.sayLove())

export {}