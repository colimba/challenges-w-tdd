import { describe, expect, it } from 'vitest'
import { listGifts } from '../src/listGifts'

describe('listGifts', () => {
  const rawLetter = 'bici coche  balón _playstation bici coche peluche'

  it('should be a function', () => {
    expect(typeof listGifts).toBe('function')
  })

  it('should throw a specifict if not string is provided as parameter', () => {
    expect(() => listGifts()).toThrow('letter should be a string')
    expect(() => listGifts([])).toThrow('letter should be a string')
    expect(() => listGifts({})).toThrow('letter should be a string')
    expect(() => listGifts(23)).toThrow('letter should be a string')
    expect(() => listGifts(null)).toThrow('letter should be a string')
    expect(() => listGifts(undefined)).toThrow('letter should be a string')
  })

  it('should accept a string as a parameter', () => {
    listGifts(rawLetter)
  })

  it('should return an objet', () => {
    expect(typeof listGifts(rawLetter)).toBe('object')
  })

  it('should return a list of present provided as parameter with space separation', () => {
    const sutPresents = 'speaker mate banana'
    const presentList = listGifts(sutPresents)
    expect(presentList).toBeDefined()
    expect(presentList.hasOwnProperty('speaker')).toBeTruthy()
    expect(presentList.hasOwnProperty('mate')).toBeTruthy()
    expect(presentList.hasOwnProperty('banana')).toBeTruthy()
  })

  it('should return the list of present with its respective quantity', () => {
    const sutPresents = 'banana mate banana banana'
    const presentList = listGifts(sutPresents)
    expect(presentList).toBeDefined()
    expect(Object.keys(presentList).length).toBe(2)
    expect(presentList.hasOwnProperty('mate')).toBeTruthy()
    expect(presentList.mate).toEqual(1)
    expect(presentList.hasOwnProperty('banana')).toBeTruthy()
    expect(presentList.banana).toEqual(3)
  })

  it('should filter presents that starts with an underscore', () => {
    const sutPresents = 'banana mate banana _banana'
    const presentList = listGifts(sutPresents)
    expect(presentList).toBeDefined()
    expect(Object.keys(presentList).length).toBe(2)
    expect(presentList.hasOwnProperty('_banana')).toBeFalsy()
    expect(presentList.hasOwnProperty('mate')).toBeTruthy()
    expect(presentList.mate).toEqual(1)
    expect(presentList.hasOwnProperty('banana')).toBeTruthy()
    expect(presentList.banana).toEqual(2)
  })

  it('shoul ignore presents separated with double space in the list', () => {
    const presentList = listGifts(rawLetter)
    expect(presentList).toBeDefined()
    expect(Object.keys(presentList).length).toBe(4)
    expect(presentList.hasOwnProperty('_playstation')).toBeFalsy()
    expect(presentList.hasOwnProperty('bici')).toBeTruthy()
    expect(presentList.bici).toEqual(2)
    expect(presentList.hasOwnProperty('coche')).toBeTruthy()
    expect(presentList.coche).toEqual(2)
    expect(presentList.hasOwnProperty('balón')).toBeTruthy()
    expect(presentList.balón).toEqual(1)
    expect(presentList.hasOwnProperty('peluche')).toBeTruthy()
    expect(presentList.peluche).toEqual(1)
  })
})
