interface Waiter {
  anjiao: boolean
  say: () => {}
}

interface Teacher {
  anjiao: boolean
  skill: () => {}
}

// as 类型断言
// function judgeWho(animal: Waiter | Teacher) {
//   if (animal.anjiao) {
//     (animal as Teacher).skill()
//   } else {
//     (animal as Waiter).say()
//   }
// }

// in 类型断言
function judgeWho(animal: Waiter | Teacher) {
  if ('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  }
}

// type 类型保护
function add (first: string | number, second: string | number): number | string {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// instanceof 只能用在class中
class NumberObj {
  count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj): number {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  } else {
    return 0
  }
}

export {}