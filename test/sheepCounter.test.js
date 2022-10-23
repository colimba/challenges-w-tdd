import { describe, expect, it } from 'vitest'
import { sheepCounter } from '../src/sheepCounter'

describe('sheepCounter', () => {
  const sheepsList = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
  ]

  it('should be a function', () => {
    expect(typeof sheepCounter).toBe('function')
  })

  it('should throw a specific if not an array is provided as parameter', () => {
    expect(() => sheepCounter()).toThrow('sheeps should be an array')
  })

  it('should return an array', () => {
    expect(Array.isArray(sheepCounter([]))).toBeTruthy()
  })

  it('shoul return and array of sheeps with name and color as attribute if a non empty list is returned', () => {
    const sheeps = sheepCounter(sheepsList)
    expect(sheeps[0].hasOwnProperty('name')).toBeTruthy()
    expect(sheeps[0].hasOwnProperty('color')).toBeTruthy()
  })

  it('should return only red sheeps', () => {
    const sheepColorSet = new Set(sheepCounter(sheepsList).map((s) => s.color))
    expect(sheepColorSet.size).toBe(1)
    expect(sheepColorSet.has('rojo')).toBeTruthy()
  })

  it('should return only sheeps whose name has an n o a regardless of order, case or space', () => {
    const sheeps = sheepCounter(sheepCounter(sheepsList))
    expect(sheeps.length).toBe(2)
    expect(sheeps[0].name).toBe('Navidad')
    expect(sheeps[1].name).toBe('Ki Na Ma')
  })
})
