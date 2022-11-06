import { describe, expect, it } from 'vitest'
import { getCoins } from '../src/coinMachine'

describe('getCoins', () => {

    it('should be a function that receives a number and return an array of coins', () => {
        expect(typeof getCoins).toBe('function')
        expect(() => getCoins()).toThrow('parameter provided should be a number')
        expect(() => getCoins(true)).toThrow('parameter provided should be a number')
        expect(() => getCoins([])).toThrow('parameter provided should be a number')
        expect(() => getCoins({})).toThrow('parameter provided should be a number')
        expect(() => getCoins('string')).toThrow('parameter provided should be a number')
        expect(() => getCoins(5)).not.toThrow('parameter provided should be a number')
        expect(Array.isArray(getCoins(5))).toBeTruthy()
        expect(getCoins(5).length).toBe(6)
        })

    it('should return an array with only the exact coin', () => {
        expect(getCoins(0)).toStrictEqual([0, 0, 0, 0, 0, 0])
        expect(getCoins(1)).toStrictEqual([1, 0, 0, 0, 0, 0])
        expect(getCoins(2)).toStrictEqual([0, 1, 0, 0, 0, 0])
        expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0])
        expect(getCoins(10)).toStrictEqual([0, 0, 0, 1, 0, 0])
        expect(getCoins(20)).toStrictEqual([0, 0, 0, 0, 1, 0])
        expect(getCoins(50)).toStrictEqual([0, 0, 0, 0, 0, 1])
    })

    it('should return an array that sumarize the provided number', () => {
        expect(getCoins(29)).toStrictEqual([0, 2, 1, 0, 1, 0])
    })

    it('should pass challenge examples', () => {
        expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1])
        expect(getCoins(3)).toStrictEqual([1, 1, 0, 0, 0, 0])
        expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0])
        expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0])
        expect(getCoins(100)).toStrictEqual([0, 0, 0, 0, 0, 2])
    })
})