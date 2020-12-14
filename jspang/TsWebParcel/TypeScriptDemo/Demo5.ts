// function getTotal(one: number, two: number): number {
//   return one + two
// }
// const total = getTotal(1, 2)

// function sayHello (): void {
//   console.log('Hello world')
// }

function errorFunction(): never {
  throw new Error()
  console.log('Hello world')
}

function forNever(): never {
  while(true) {}
  console.log('Hello world')
}

function add({one, two}: { one: number, two: number }) {
  return one + two
}
const total = add({one: 1, two: 2})

function getNumber({one}: { one: number }): number {
  return one
}
const one = getNumber({one: 1})

export {}