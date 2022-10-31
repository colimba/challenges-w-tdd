import { describe, expect, it } from 'vitest'
import { daysToXmas, REFERENCE_DATE } from '../src/daysToXmas'


describe('daysToXmas', () => {
    it('should be a function that expect a Date and return a number', () => {
        expect(typeof daysToXmas).toBe('function')
        expect(() => daysToXmas(undefined)).toThrow('parameter should be a date')
        expect(() => daysToXmas('something')).toThrow('parameter should be a date')
        expect(() => daysToXmas(5)).toThrow('parameter should be a date')
        expect(typeof daysToXmas(new Date("December 20, 2021 03:24:00"))).toBe('number')
    })

    it('should return 0 if provided date is reference date', () => {
        expect(daysToXmas(REFERENCE_DATE)).toBe(0)
    })

    it('should return days to reference date', () => {
        expect(daysToXmas(new Date('Dec 1, 2021'))).toBe(24)
        expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).toBe(1)
        expect(daysToXmas(new Date('Dec 24, 2021 23:59:59'))).toBe(1)
        expect(daysToXmas(new Date('December 20, 2021 03:24:00'))).toBe(5)
    })

    it('should return negative days if references is before the provided date', () => {
        expect(daysToXmas(new Date('Dec 26, 2021'))).toBe(-1)
        expect(daysToXmas(new Date('Dec 31, 2021'))).toBe(-6)
        expect(daysToXmas(new Date('Jan 1, 2022 00:00:01'))).toBe(-7)
        expect(daysToXmas(new Date('Jan 1, 2022 23:59:59'))).toBe(-7)
    })
})