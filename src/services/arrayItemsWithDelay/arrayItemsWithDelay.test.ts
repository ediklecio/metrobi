import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getArrayItemsWithDelay } from './arrayItemsWithDelay';

describe('getArrayItemsWithDelay', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should call the writer for each item with an exponentially increasing delay', async () => {
        const items = ['item1', 'item2', 'item3'];
        const writer = vi.fn();

        const promise = getArrayItemsWithDelay(items, writer);

        // Initial state
        expect(writer).not.toHaveBeenCalled();

        // First item after 1000ms
        await vi.advanceTimersByTimeAsync(1000);
        expect(writer).toHaveBeenCalledWith('item1');
        expect(writer).toHaveBeenCalledTimes(1);

        // Second item after another 2000ms
        await vi.advanceTimersByTimeAsync(2000);
        expect(writer).toHaveBeenCalledWith('item2');
        expect(writer).toHaveBeenCalledTimes(2);

        // Third item after another 4000ms
        await vi.advanceTimersByTimeAsync(4000);
        expect(writer).toHaveBeenCalledWith('item3');
        expect(writer).toHaveBeenCalledTimes(3);

        // Ensure the main promise resolves
        await promise;
    });

    it('should handle an empty array gracefully', async () => {
        const items: string[] = [];
        const writer = vi.fn();

        await getArrayItemsWithDelay(items, writer);

        expect(writer).not.toHaveBeenCalled();
    });

    it('should stop execution and reject the promise if the writer function throws an error', async () => {
        const items = ['item1', 'item2', 'item3'];
        const testError = new Error('Writer function failed');
        const writer = vi.fn((item: string) => {
            if (item === 'item2') {
                throw testError;
            }
        });

        const runPromise = getArrayItemsWithDelay(items, writer);

        // Advance time for the first item (1s)
        await vi.advanceTimersByTimeAsync(1000);
        expect(writer).toHaveBeenCalledWith('item1');

        // The promise should be rejected. We set up the expectation before advancing
        // the timer that will cause the rejection to avoid an unhandled rejection error.
        const rejectionPromise = expect(runPromise).rejects.toThrow(testError);

        // Advance time for the second item (2s), which will throw
        await vi.advanceTimersByTimeAsync(2000);

        await rejectionPromise;
        expect(writer).toHaveBeenCalledTimes(2);
    });
});