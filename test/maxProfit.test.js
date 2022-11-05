import { describe, expect, it } from 'vitest'
import { maxProfit } from '../src/maxProfit'

describe('maxProfit', () => {

    it('should be a function that takes an array and return a number', () => {
        expect(typeof maxProfit).toBe('function')
        expect(() => maxProfit()).toThrow('provided parameter should be an array')
        expect(() => maxProfit('something')).toThrow('provided parameter should be an array')
        expect(() => maxProfit(32)).toThrow('provided parameter should be an array')
        expect(() => maxProfit(true)).toThrow('provided parameter should be an array')
        expect(typeof maxProfit([23, 32])).toBe('number')
    })

    it('should return the diference between the only 2 elements on an array', () => {
        expect(maxProfit([10, 20])).toBe(10)
    })

    it('should retrun -1 if the diference is not positive (>0)', () => {
        expect(maxProfit([20, 10])).toBe(-1)
        expect(maxProfit([10, 10])).toBe(-1)
    })

    it('should return the max profit on an orderer array', () => {
        expect(maxProfit([10, 20, 70])).toBe(60)
    })

    it('should retrun -1 in an descendent order arryr', () => {
        expect(maxProfit([100, 20, 7])).toBe(-1)
    })

    it('should return max profit coinsidering numbers from left to right', () => {
        expect(maxProfit([20, 10, 5, 10, 15])).toBe(10)
    })
    
    it('should pass challenge tests', () => {
        const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
        const pricesEth = [10, 20, 30, 40, 50, 60, 70]
        const pricesDoge = [18, 15, 12, 11, 9, 7]
        const pricesAda = [3, 3, 3, 3, 3]
        expect(maxProfit(pricesBtc)).toBe(16)
        expect(maxProfit(pricesEth)).toBe(60)
        expect(maxProfit(pricesDoge)).toBe(-1)
        expect(maxProfit(pricesAda)).toBe(-1)
    })
})