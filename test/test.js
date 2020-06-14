const assert = require('assert')
const arrDiff = require('../')

const diff = (a, b, c) => {
  it(`${a}, ${b} => ${c}`, () => {
    assert.deepEqual(arrDiff(a, b), c)
  })
}

describe('arrDiff', () => {
  describe('Not in A, not in B', () => {
    diff([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6])
  })

  describe('One in A, not in B', () => {
    diff([1], [2, 3, 4], [1, 2, 3, 4])
  })
  describe('One in A, one in B', () => {
    diff([1], [1, 2, 3], [2, 3])
  })
  describe('One in A, many in B', () => {
    diff([1], [1, 1, 1, 2, 3], [2, 3])
  })
  describe('Many in A, not in B', () => {
    diff([1, 1, 1], [2, 3, 4], [1, 2, 3, 4])
  })
  describe('Many in A, one in B', () => {
    diff([1, 1, 1], [1, 2, 3, 4], [2, 3, 4])
  })
  describe('Many in A, many in B', () => {
    diff([1, 1, 1], [1, 1, 2, 3, 4], [2, 3, 4])
  })
  
  describe('One in B, not in A', () => {
    diff([2, 3, 4], [1], [1, 2, 3, 4])
  })
  describe('One in B, one in A', () => {
    diff([1, 2, 3], [1], [2, 3])
  })
  describe('One in B, many in A', () => {
    diff([1, 1, 1, 2, 3], [1], [2, 3])
  })
  describe('Many in B, not in A', () => {
    diff([2, 3, 4], [1, 1, 1], [1, 2, 3, 4])
  })
  describe('Many in B, one in A', () => {
    diff([1, 2, 3, 4], [1, 1, 1], [2, 3, 4])
  })
  describe('Many in B, many in A', () => {
    diff([1, 1, 2, 3, 4], [1, 1, 1], [2, 3, 4])
  })
  
  describe('Large enough array', () => {
    diff([
      98, 11, 11, 96, 84,  2, 83, 25, 19, 88, 31, 62,
       0,  2, 86,  2, 23, 92,  0, 60, 83, 93, 35, 78,
      77, 17, 73, 45, 15, 80, 26, 29, 51, 31, 90, 27,
      31, 32,  9, 66, 55, 76, 95,  3, 36,  0, 86, 95,
      33, 69, 37, 74, 61, 43, 69, 87,  9,  8, 58, 15,
      60, 65, 24, 88, 28, 41, 17, 72, 72,  6, 21, 33,
      51, 86, 62, 98, 91, 53, 31, 41, 70, 84, 12, 46,
      94, 30, 25, 93, 66, 67, 52, 79, 81, 57, 49, 97,
      68, 75, 42, 37
    ],
    [
      43, 63, 75, 73, 80, 57, 13, 72, 63, 65, 82, 90,
      71, 15, 20,  6, 87, 53, 27, 76,  6, 65, 39,  1,
      52, 31,  9, 59, 32, 56, 76, 30, 30, 10, 84, 59,
      48, 94, 55, 37, 57, 39, 98, 11, 90, 53, 68, 44,
      72, 43, 89, 12, 18, 55, 52, 78, 81, 35, 26,  5,
      10, 62, 21, 11, 81, 94,  8, 87, 57,  6, 68, 77,
      92, 37, 46, 15, 67, 20, 17, 98, 19, 29, 36, 63,
      11, 11, 40, 24, 69, 30, 59, 69,  0, 56, 69, 45,
      57, 42, 89, 83
    ],
    [
       1, 10, 13, 18,  2, 20, 23, 25, 28,  3,
      33, 39, 40, 41, 44, 48, 49,  5, 51, 56,
      58, 59, 60, 61, 63, 66, 70, 71, 74, 79,
      82, 86, 88, 89, 91, 93, 95, 96, 97
    ])
  })
})