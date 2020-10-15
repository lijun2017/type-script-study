interface Girl {
  name: string
}

// 泛型的约束
// class SelectGril<T extends string | number> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index]
//   }
// }

class SelectGril<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name
  }
}

const selectGril = new SelectGril([{
  name: '大脚'
}, {
  name: '刘英'
}, {
  name: '小红'
}])
console.log(selectGril.getGirl(1))

export {}
