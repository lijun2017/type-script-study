enum Status {
  MASSAGE = 1, SPA, DABAOJIAN
}

function getServe(status: any) {
  if (status == Status.MASSAGE) {
    return 'massage'
  } else if (status == Status.SPA) {
    return 'SPA'
  } else if (status == Status.DABAOJIAN) {
    return 'dabaojian'
  } 
}

const result = getServe('')
console.log(`我要去${result}`)

export {}
