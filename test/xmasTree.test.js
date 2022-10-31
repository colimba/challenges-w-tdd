import { describe, expect, it } from "vitest";
import {xmasTree} from '../src/xmasTree'

describe('xmasTree', () => {

    it('should be a function that recibe a positive number greater than zero, and return a string', () => {
        expect(typeof xmasTree).toBe('function')
        expect(() => xmasTree('')).toThrow('provided parameter should be a number')
        expect(() => xmasTree()).toThrow('provided parameter should be a number')
        expect(() => xmasTree([])).toThrow('provided parameter should be a number')
        expect(() => xmasTree({})).toThrow('provided parameter should be a number')
        expect(() => xmasTree(true)).toThrow('provided parameter should be a number')
        expect(() => xmasTree(null)).toThrow('provided parameter should be a number')
        expect(() => xmasTree(undefined)).toThrow('provided parameter should be a number')
        expect(() => xmasTree(0)).toThrow('provided parameter should be a positive number greter than zero')
        expect(() => xmasTree(-2)).toThrow('provided parameter should be a positive number greter than zero')
        expect(typeof xmasTree(1)).toBe('string')
    })

    it('should return a tree with the height provided plus 2 lines that represent the trunk', () => {
        expect(xmasTree(1).split(/\n/).length).toBe(3)
        expect(xmasTree(3).split(/\n/).length).toBe(5)
        expect(xmasTree(4).split(/\n/).length).toBe(6)
    })

    it('should have lines with equals lenght (height*2-1)', () => {
        const sut = xmasTree(3).split(/\n/) 
        expect(sut[0].length).toBe(5)
        expect(sut[1].length).toBe(5)
        expect(sut[2].length).toBe(5)
        expect(sut[3].length).toBe(5)
        expect(sut[4].length).toBe(5)
    })

    it('should have an * sorounded by heiht-1 _ in the first line', () => {
        expect(xmasTree(2).split(/\n/)[0]).toBe('_*_')
        expect(xmasTree(3).split(/\n/)[0]).toBe('__*__')
        expect(xmasTree(5).split(/\n/)[0]).toBe('____*____')
    })

    it('should have a trunk sourounded by _ times the height-1', () => {
        const sut = xmasTree(3).split(/\n/)
        expect(sut[3]).toBe('__#__')
        expect(sut[4]).toBe('__#__')
    })

    it('should render challenge tests', () => {
        const fiveHeight = xmasTree(5).split(/\n/)
        expect(fiveHeight[0]).toBe('____*____')
        expect(fiveHeight[1]).toBe('___***___')
        expect(fiveHeight[2]).toBe('__*****__')
        expect(fiveHeight[3]).toBe('_*******_')
        expect(fiveHeight[4]).toBe('*********')
        expect(fiveHeight[5]).toBe('____#____')
        expect(fiveHeight[6]).toBe('____#____')
    })

})