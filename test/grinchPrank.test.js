import { describe, expect, it } from 'vitest'
import {grinchPrankDetector} from '../src/grinchPrankDetector'

describe('grinchPrank', () => {
  
  it('shoul be a function', () => {
    expect(typeof grinchPrankDetector).toBe('function')
  })

  it('should throw a specific if no string is provided as parameter', () => {
    expect(() => grinchPrankDetector()).toThrow('parameter letter must be a string')
    expect(() => grinchPrankDetector([])).toThrow('parameter letter must be a string')
    expect(() => grinchPrankDetector({})).toThrow('parameter letter must be a string')
    expect(() => grinchPrankDetector(23)).toThrow('parameter letter must be a string')
    expect(() => grinchPrankDetector(null)).toThrow('parameter letter must be a string')
    expect(() => grinchPrankDetector(undefined)).toThrow(
      'parameter letter must be a string'
    )
  })

  it('should return a boolean', () => {
    const response = grinchPrankDetector('something')
    expect(typeof response).toBe('boolean')
  })

  it('should return false if letter is empty', () => {
    expect(grinchPrankDetector('')).toBeFalsy()
  })

  it('should return false if parenthesis wont open and close', () => {
    expect(grinchPrankDetector('something (im not closing')).toBeFalsy()
  })
  it('should return false if close parenthesis is present without a previous open parenthesis', () => {
    expect(grinchPrankDetector('something ) that is wrong (wrong')).toBeFalsy()
  })
  
  it('should return false if letter has parenthesis with no content inside', () => {
    expect(grinchPrankDetector('something () asdf')).toBeFalsy()
    expect(grinchPrankDetector('something (something) asdf ()')).toBeFalsy()
  })
  
  it('should return true if only text is provided', () => {
    expect(grinchPrankDetector('something that is only text and wishes')).toBeTruthy()
  })
  
  it('should return false if { or [ is present in the letter', () => {
    expect(grinchPrankDetector('something { asdf')).toBeFalsy()
    expect(grinchPrankDetector('something [ fdsa')).toBeFalsy()
  })
  
  it('should pass challenges examples', () => {
    expect(grinchPrankDetector('bici coche (balón) bici coche peluche')).toBeTruthy()
    expect(grinchPrankDetector('(muñeca) consola bici')).toBeTruthy()
    expect(grinchPrankDetector('bici coche (balón bici coche')).toBeFalsy()
    expect(grinchPrankDetector('peluche (bici [coche) bici coche balón')).toBeFalsy()
    expect(grinchPrankDetector('(peluche {) bici')).toBeFalsy()
    expect(grinchPrankDetector('() bici')).toBeFalsy()
  })
})
