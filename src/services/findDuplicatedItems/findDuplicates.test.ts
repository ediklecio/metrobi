import { describe, it, expect } from 'vitest';
import { findDuplicates } from './findDuplicates';

describe('findDuplicates', () => {
  // --- Success Cases ---

  it('should return an array with duplicate numbers', () => {
    const array = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 8];
    const result = findDuplicates(array);
    expect(result).toEqual(expect.arrayContaining([1, 2, 8]));
    expect(result.length).toBe(3);
  });

  it('should return an array with duplicate strings', () => {
    const array = ['apple', 'banana', 'cherry', 'apple', 'date', 'banana'];
    const result = findDuplicates(array);
    expect(result).toEqual(expect.arrayContaining(['apple', 'banana']));
    expect(result.length).toBe(2);
  });

  it('should return an array with mixed duplicate types', () => {
    const array = [1, 'hello', 2, 'world', 1, 'hello', 3];
    const result = findDuplicates(array);
    expect(result).toEqual(expect.arrayContaining([1, 'hello']));
    expect(result.length).toBe(2);
  });

  it('should return an empty array when there are no duplicates', () => {
    const array = [1, 2, 3, 4, 5, 'unique'];
    expect(findDuplicates(array)).toEqual([]);
  });

  it('should return an empty array for an empty input array', () => {
    const array: (string | number)[] = [];
    expect(findDuplicates(array)).toEqual([]);
  });

  it('should handle multiple occurrences of the same duplicate item correctly', () => {
    const array = [1, 1, 1, 2, 2, 3, 3, 3, 3];
    const result = findDuplicates(array);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
    expect(result.length).toBe(3);
  });

  // --- Edge and Failure Cases ---

  it('should ignore null and undefined values and find other duplicates', () => {
    const array = [1, null, 2, undefined, 3, 1, null, 4, 2];
    const result = findDuplicates(array);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
    expect(result.length).toBe(2);
  });

  it('should return an empty array if only null and undefined values are present', () => {
    const array = [null, undefined, null, undefined];
    expect(findDuplicates(array)).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    // @ts-expect-error Testing invalid input
    expect(findDuplicates(null)).toEqual([]);
    // @ts-expect-error Testing invalid input
    expect(findDuplicates(undefined)).toEqual([]);
    // @ts-expect-error Testing invalid input
    expect(findDuplicates({ a: 1 })).toEqual([]);
    // @ts-expect-error Testing invalid input
    expect(findDuplicates('a string')).toEqual([]);
  });
});