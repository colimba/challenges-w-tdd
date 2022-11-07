import { describe, expect, it } from 'vitest'
import { fidelityCalculation, FIDELITY_CARD_PRICE, shouldBuyFidelity } from '../src/crazyCinema'


describe('shouldBuyFidelity', () => {

    it('should be a function receives a number and return a boolean', () => {
        expect(typeof shouldBuyFidelity).toBe('function')
        expect(() => shouldBuyFidelity()).toThrow('parameter provided should be a number')
        expect(() => shouldBuyFidelity({})).toThrow('parameter provided should be a number')
        expect(() => shouldBuyFidelity([])).toThrow('parameter provided should be a number')
        expect(() => shouldBuyFidelity('string')).toThrow('parameter provided should be a number')
        expect(() => shouldBuyFidelity(true)).toThrow('parameter provided should be a number')
        expect(() => shouldBuyFidelity(3)).not.toThrow('parameter provided should be a number')
        expect(typeof shouldBuyFidelity(3)).toBe('boolean')
    })

    it('should return true when fidelity its a deal (fidelity price lower than tickets prices) otherwise false', () => {
        expect(shouldBuyFidelity(0)).toBeFalsy()
        expect(shouldBuyFidelity(5)).toBeFalsy()
        expect(shouldBuyFidelity(23)).toBeFalsy()
        expect(shouldBuyFidelity(24)).toBeTruthy()
    })
})

describe('fidelityCalculation', () => {
    it('should return the cost if no time is provided', () => {
        expect(fidelityCalculation(0)).toBe(FIDELITY_CARD_PRICE)
    })
    
    it('should return the fidelity cost plus the 75% of a ticket when 1 time is provided', () => {
        expect(fidelityCalculation(1)).toBe(259)
    })

    it('should return the fidelity cost plus the 75% of a ticket plus the 75% of the previous cost when 2 is provided as times', () => {
        expect(fidelityCalculation(2)).toBe(265.75)
    })
})
