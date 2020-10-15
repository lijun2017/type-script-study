// 泛型
// function join<Fan>(first: Fan, second: Fan): string {
//   return `${first}${second}`
// }
// join<number>(1, 2)
// 多泛型
function join<Fan, Xing>(first: Fan, second: Xing): string {
  return `${first}${second}`
}
join<number, string>(1, '2')

// 泛型中数组的使用
// function myFun<Any>(params: Any[]) {
//   return params
// }
function myFun<Any>(params: Array<Any>) {
  return params
}
myFun<string>(["lijun", undefined, null])

export {}
