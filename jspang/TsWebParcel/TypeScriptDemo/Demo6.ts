// const numberArr = [1, 2, 3]
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'c', null, undefined]
const undefinedArr: undefined[] = [undefined]
const arr: (number | string)[] = [1, 'string', 2]

// type alias 类型别名
type Lady = { name: string, age: number }
class Madam { name: string; age: number }
// const xiaojiejies: { name: string, age: number }[]
// const xiaojiejies: Lady[]
const xiaojiejies: Madam[] = [{
  name: '刘英',
  age: 18
}, {
  name: '谢大脚',
  age: 28
}]

export {}