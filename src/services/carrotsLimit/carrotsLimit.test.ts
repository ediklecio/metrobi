import { describe, it, expect } from 'vitest';
import { getMaxValue } from './carrotsLimit';

describe('getMaxValueOfCarrots', () => {
    it('should return 0 if carrotTypes is empty', () => {
        const carrotTypes: { kg: number; price: number }[] = [];
        const capacity = 10;
        expect(getMaxValue(carrotTypes, capacity)).toBe(0);
    });

    it('should return 0 if capacity is 0', () => {
        const carrotTypes = [{ kg: 5, price: 100 }];
        const capacity = 0;
        expect(getMaxValue(carrotTypes, capacity)).toBe(0);
    });

    it('should handle multiple carrot types and find the optimal combination', () => {
        const carrotTypes = [
            { kg: 3, price: 8 },
            { kg: 2, price: 3 },
            { kg: 4, price: 9 },
            { kg: 1, price: 6 },
        ];
        const capacity = 5;
        expect(getMaxValue(carrotTypes, capacity)).toBe(15);
    });

    it('should choose the best combination without exceeding capacity', () => {
        const carrotTypes = [
            { kg: 2, price: 5 },
            { kg: 3, price: 9 },
            { kg: 4, price: 12 },
        ];
        const capacity = 5;
        expect(getMaxValue(carrotTypes, capacity)).toBe(14);
    });

    it('should ignore cheaper light item in favor of better total value', () => {
        const carrotTypes = [
            { kg: 1, price: 2 },
            { kg: 3, price: 6 },
            { kg: 4, price: 7 },
        ];
        const capacity = 4;
        expect(getMaxValue(carrotTypes, capacity)).toBe(8);
    });

    it('should return 0 when no items fit in the knapsack', () => {
        const carrotTypes = [
            { kg: 5, price: 10 },
            { kg: 6, price: 12 },
        ];
        const capacity = 3;
        expect(getMaxValue(carrotTypes, capacity)).toBe(0);
    });

    it('should find the optimal combination among many possibilities', () => {
        const carrotTypes = [
            { kg: 5, price: 10 },
            { kg: 4, price: 40 },
            { kg: 6, price: 30 },
            { kg: 3, price: 50 },
        ];
        const capacity = 10;
        expect(getMaxValue(carrotTypes, capacity)).toBe(90);
    });

    it('should skip less valuable items to maximize value', () => {
        const carrotTypes = [
            { kg: 2, price: 10 },
            { kg: 3, price: 20 },
            { kg: 4, price: 30 },
            { kg: 5, price: 60 },
        ];
        const capacity = 8;
        expect(getMaxValue(carrotTypes, capacity)).toBe(80);
    });

    it('should select the most valuable subset even if all items fit', () => {
        const carrotTypes = [
            { kg: 2, price: 30 },
            { kg: 2, price: 25 },
            { kg: 2, price: 20 },
            { kg: 2, price: 15 },
        ];
        const capacity = 6;
        expect(getMaxValue(carrotTypes, capacity)).toBe(75);
    });

});