import { describe, it, expect } from 'vitest';
import { areBracketsBalanced } from './CodeBlocks';

describe('areBracketsBalanced', () => {
    it('should return true for balanced brackets', () => {
        expect(areBracketsBalanced('{[]}')).toBe(true);
        expect(areBracketsBalanced('([{}])')).toBe(true);
        expect(areBracketsBalanced('()[]{}')).toBe(true);
        expect(areBracketsBalanced('{ key: [1, 2] }')).toBe(true);
    });
    
    it('should return true for strings with no brackets or empty strings', () => {
        expect(areBracketsBalanced('')).toBe(true);
        expect(areBracketsBalanced('hello world')).toBe(true);
    });

    it('should return false for unbalanced brackets starting with a closing one', () => {
        expect(areBracketsBalanced('{(])}')).toBe(false);
        expect(areBracketsBalanced(')')).toBe(false);
        expect(areBracketsBalanced('())')).toBe(false);
    });

    it('should return false for incorrectly nested brackets', () => {
        expect(areBracketsBalanced('([)]')).toBe(false);
        expect(areBracketsBalanced('{[(])}')).toBe(false);
    });

    it('should return false for strings with unclosed opening brackets', () => {
        expect(areBracketsBalanced('(()')).toBe(false);
        expect(areBracketsBalanced('{')).toBe(false);
        expect(areBracketsBalanced('([{}])(')).toBe(false);
    });

    it('should return false for strings with unopened closing brackets', () => {
        expect(areBracketsBalanced('())')).toBe(false);
        expect(areBracketsBalanced('}')).toBe(false);
        expect(areBracketsBalanced('()[]}')).toBe(false);
    });
});