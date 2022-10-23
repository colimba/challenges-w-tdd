import { describe, expect, it } from 'vitest'

// prev to call let arr = subsection.split(' ')
const verifySubsection = (arr, index) => {
  for (let i = index; i < arr.length; i++) {
    if (i + 1 > arr.length) return false
    if (arr[i] === '{' || arr[i] === '}' || arr[i] === '[' || arr[i] === ']')
      return false
    if (arr[i] === '(') return verifySubsection(arr, i)
    if (arr[i] === ')' && i > index + 1) return true
  }
}

const grinchPrank = (letter) => {
  if (typeof letter !== 'string')
    throw new Error('parameter letter must be a string')

  if (letter === '') return false
  //const letterArray = letter.split(' ', '(', ')').filter((w) => w !== '')
  //console.log(letterArray)

  verifySubsection(letter.split(' '), 0)

  return true
}

describe('grinchPrank', () => {
  it('shoul be a function', () => {
    expect(typeof grinchPrank).toBe('function')
  })

  it('should throw a specific if no string is provided as parameter', () => {
    expect(() => grinchPrank()).toThrow('parameter letter must be a string')
    expect(() => grinchPrank([])).toThrow('parameter letter must be a string')
    expect(() => grinchPrank({})).toThrow('parameter letter must be a string')
    expect(() => grinchPrank(23)).toThrow('parameter letter must be a string')
    expect(() => grinchPrank(null)).toThrow('parameter letter must be a string')
    expect(() => grinchPrank(undefined)).toThrow(
      'parameter letter must be a string'
    )
  })

  it('should return a boolean', () => {
    const response = grinchPrank('something')
    expect(typeof response).toBe('boolean')
  })

  it('should return false if letter is empty', () => {
    expect(grinchPrank('')).toBeFalsy()
  })

  it('should return false if letter has () with no word surrounded', () => {
    const sut = 'something () ( ) asdf'
    expect(grinchPrank(sut)).toBeFalsy()
  })
})
