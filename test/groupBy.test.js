import { describe, expect, it } from 'vitest'
import { groupBy } from '../src/groupBy'

describe('groupBy', () => {

    it('should be a function thats receives an array and a string or function, and returns an object', () => {
        const sut = groupBy([], () => {})
        expect(typeof groupBy).toBe('function')
        expect(() => groupBy()).toThrow('parameters provided should be an array and a string or a function')
        expect(() => groupBy(true, 'string')).toThrow('parameters provided should be an array and a string or a function')
        expect(() => groupBy('string', 'string')).toThrow('parameters provided should be an array and a string or a function')
        expect(() => groupBy([])).toThrow('parameters provided should be an array and a string or a function')
        expect(() => groupBy([], 'string')).not.toThrow('parameters provided should be an array and a string or a function')
        expect(() => groupBy([], () => {})).not.toThrow('parameters provided should be an array and a string or a function')
        expect(typeof sut).toBe('object')
    })

    it('should return an object grouped by a function result as a key', () => {
        const sut = groupBy([6.1, 4.2, 6.3], Math.floor)
        const expected = { 6: [6.1, 6.3], 4: [4.2] }
        expect(sut).toStrictEqual(expected)
    })
    it('should group by the length of the string when word length is provided as parameter it', () => {
        const sut = groupBy(['one', 'two', 'three'], 'length') 
        const expected = { 3: ['one', 'two'], 5: ['three'] }
        expect(sut).toStrictEqual(expected)
    })

    it('should group by age when word age is provided as parameter it', () => {
        const sut = groupBy([{age: 23}, {age: 24}], 'age') 
        const expected = { 23: [{age: 23}], 24: [{age: 24}] }
        expect(sut).toStrictEqual(expected)
    })

    it('should pass other challenges examples', () => {
        const sutDate = groupBy(
            [1397639141184, 1363223700000],
            timestamp => new Date(timestamp).getFullYear()
          )
        const expectedDate = { 2013: [1363223700000], 2014: [1397639141184] }
        expect(sutDate).toStrictEqual(expectedDate)

        const sutRanking = groupBy([
            { title: 'JavaScript: The Good Parts', rating: 8 },
            { title: 'Aprendiendo Git', rating: 10 },
            { title: 'Clean Code', rating: 9 },
          ], 'rating')
        const expectedRanking = { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
            9: [{ title: 'Clean Code', rating: 9 }],
            10: [{ title: 'Aprendiendo Git', rating: 10 }] }
            expect(sutRanking).toStrictEqual(expectedRanking)
    })
})