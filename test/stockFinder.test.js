import { describe, expect, it } from 'vitest'
import { stockFinder } from '../src/stockFinder'

describe('stockFinder', () => {
    const simpleObject = {'bar': 'foo'}
    const nestedObject = {'bar': { 'bar': 'foo' }}

    it('should be a function that recibes an object and a string', () => {
        expect(typeof stockFinder).toBe('function')
        expect(() => stockFinder()).toThrow('parameters should be and object and a string')
        expect(() => stockFinder(true, true)).toThrow('parameters should be and object and a string')
        expect(() => stockFinder({}, 'something')).toThrow('parameters should be and object and a string')
        expect(() => stockFinder(simpleObject, '')).toThrow('parameters should be and object and a string')
        expect(() => stockFinder(simpleObject, 2)).toThrow('parameters should be and object and a string')
    })

    it('should return a boolean', () => {
        const sut = stockFinder(simpleObject, 'product')
        expect(typeof sut).toBe('boolean')
    })

    it('should return true if product is present in a simple object', () => {
        expect(stockFinder(simpleObject, 'foo')).toBeTruthy()
        expect(stockFinder(simpleObject, 'fuu')).toBeFalsy()
    })

    it('should return true if product is present in a nested object', () => {
        expect(stockFinder(nestedObject, 'foo')).toBeTruthy()
        expect(stockFinder(nestedObject, 'fuu')).toBeFalsy()
    })

    it('should pass challeges examples', () => {
        const almacen = {
            'estanteria1': {
                'cajon1': {
                'producto1': 'coca-cola',
                'producto2': 'fanta',
                'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                'producto1': 'pantalones',
                'producto2': 'camiseta' // <- ¡Está aquí!
                }
            }
        }
        expect(stockFinder(almacen, 'camiseta')).toBeTruthy()
        const otroAlmacen = {
        'baul': {
            'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
            }
        }
        }
        expect(stockFinder(otroAlmacen, 'gameboy')).toBeFalsy()
    })
})