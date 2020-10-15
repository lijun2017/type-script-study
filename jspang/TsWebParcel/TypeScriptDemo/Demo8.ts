interface Girl {
  name: string
  age: number
  bust: number
  waisrline?: number
}

const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waisrline: 21
}

const screenResume = (girl: Girl): void => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试')
  girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰')
}

const getResume = (girl: Girl): void => {
  console.log(girl.name + '年龄是' + girl.age)
  console.log(girl.name + '胸围是' + girl.bust)
  girl.waisrline && console.log(girl.name + '腰围是' + girl.waisrline)
}

screenResume(girl)
getResume(girl)

export {}
