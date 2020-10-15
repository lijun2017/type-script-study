interface Girl {
  name: string
  age: number
  bust: number
  waisrline?: number
  [propname: string]: any,
  say(): string
}

interface Teacher extends Girl {
  teach(): string
}

const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waisrline: 21,
  sex: '女',
  say () {
    return '欢迎光临'
  },
  teach() {
    return '我来教你'
  }
}

class XiaoJieJie implements Girl {
  name = '刘英'
  age = 18
  bust = 90
  say () {
    return '欢迎光临'
  }
}

const screenResume = (girl: Girl): void => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试')
  girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰')
}

const getResume = (girl: Teacher): void => {
  console.log(girl.name + '年龄是' + girl.age)
  console.log(girl.name + '胸围是' + girl.bust)
  girl.waisrline && console.log(girl.name + '腰围是' + girl.waisrline)
  girl.sex && console.log(girl.name + '性别是' + girl.sex)
}

screenResume(girl)
getResume(girl)

export {}
