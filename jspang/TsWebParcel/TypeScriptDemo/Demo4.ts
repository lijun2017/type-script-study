// type annotation 类型注解
// type inference 类型推断

let count: number // 类型注解
count = 123

let countInference = 123 // 类型推断


// 可以分析就不需要写类型注释
const one = 1
const two = 2
const three = one + two

// 需要分析就需要些类型注解
function getTotal(one: number, two: number) {
  return one + two
}
const total = getTotal(1, 2)

const XiaoJieJie = {
  name: '刘英',
  age: 18
}

export {}