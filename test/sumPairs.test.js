import { describe, expect, it } from 'vitest'
import { sumPairs } from '../src/sumPairs'


describe('sumPairs', () => {
    const sut = sumPairs([1, 2, 3], 4)

    it('should be a function that recibes an array and a number', () => {
        expect(typeof sumPairs).toBe('function')
        expect(() => sumPairs()).toThrow(
            'an array and a number should be provided'
        )
        expect(() => sumPairs([])).toThrow(
            'an array and a number should be provided'
        )
        expect(() => sumPairs([2, 3], '')).toThrow(
            'an array and a number should be provided'
        )
    })

    it('should return an array with 2 numbers', () => {
        expect(Array.isArray(sut)).toBeTruthy()
        expect(typeof sut[0]).toBe('number')
        expect(typeof sut[1]).toBe('number')
    })

    it('should return the pair of number that sumarize the resul', () => {
        expect(sut[0]).toBe(1)
        expect(sut[1]).toBe(3)
    })
    
    it('should return null if no secuence sumarize the result', () => {
        expect(sumPairs([1,2,3], 14)).toBeNull()
    })

    it('should pass the challenge examples', () => {
        const challengeSut1 = sumPairs([3, 5, 7, 2], 10)
        const challengeSut2 = sumPairs([-3, -2, 7, -5], 10)
        const challengeSut3 = sumPairs([2, 2, 3, 1], 4)
        const challengeSut4 = sumPairs([6, 7, 1, 2], 8)
        const challengeSut5 = sumPairs([0, 2, 2, 3, -1, 1, 5], 6)

        expect(challengeSut1[0]).toBe(3)
        expect(challengeSut1[1]).toBe(7)
        expect(challengeSut2).toBeNull()
        expect(challengeSut3[0]).toBe(2)
        expect(challengeSut3[1]).toBe(2)
        expect(challengeSut4[0]).toBe(6)
        expect(challengeSut4[1]).toBe(2)
        expect(challengeSut5[0]).toBe(1)
        expect(challengeSut5[1]).toBe(5)
    })

})
