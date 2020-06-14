const cmp = require('./defaultCompare.js')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let arr1 = [], arr2 = []
for (let i=0; i<30000; i++) {
  //arr1[i] = getRandomInt(Number.MAX_SAFE_INTEGER).toString()
  //arr2[i] = getRandomInt(Number.MAX_SAFE_INTEGER).toString()
  //arr1[i] = getRandomInt(300000).toString()
  //arr2[i] = getRandomInt(300000).toString()
  arr1[i] = getRandomInt(300000)
  arr2[i] = getRandomInt(300000)
}

// Original array version
const arrDiff1 = (a, b) => {
  const notIn = arr => el => !arr.includes(el)
  const deDup = (e, i, arr) => arr.indexOf(e) === i
  return []
    .concat(a.filter(notIn(b)))
    .concat(b.filter(notIn(a)))
    .filter(deDup).sort()
}

// Map version
const arrDiff2 = (a, b) => {
  let m = new Map()
  for (e of a) m.set(e, 1)
  for (e of b) {
    if (!m.has(e)) m.set(e, -1)
    else if (m.get(e) == 1) m.set(e, 0)
  }
  let r = []
  for ([k, v] of m.entries()) if (v!=0) r.push(k)
  return r.sort()
}

// Set version
const arrDiff3 = (a, b) => {
  const U = new Set([...a, ...b])
  const I = new Set(a.filter(x => b.includes(x)))
  return [...U].filter(x => !I.has(x)).sort()
}

// New array version
const arrDiff4 = (a, b) => {
  let A = a.concat().sort()
  let B = b.concat().sort()
  let i=0, j=0, res = []
  while (i < A.length && j < B.length) {
    while (i < A.length-1 && A[i+1] == A[i]) i++ // skip duplicates
    while (j < B.length-1 && B[j+1] == B[j]) j++ // skip duplicates
    if (i >= A.length || j >= B.length) break
    switch (cmp(A[i], B[j])) {
      case  0: i++, j++; break
      case -1: res.push(A[i++]); break
      case  1: res.push(B[j++])
    }
  }
  return res.concat(A.slice(i), B.slice(j))
}

console.time("Array")
let l1 = arrDiff1(arr1, arr2).length
console.timeEnd("Array")

console.time("Set")
let l3 =  arrDiff3(arr1, arr2).length
console.timeEnd("Set")

console.time("Map")
let l2 = arrDiff2(arr1, arr2).length
console.timeEnd("Map")

console.time("New Array")
let l4 = arrDiff4(arr1, arr2).length
console.timeEnd("New Array")

console.log(l1, l2, l3, l4)

module.exports = arrDiff1