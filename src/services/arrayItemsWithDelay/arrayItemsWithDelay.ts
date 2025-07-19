/**
 * Asynchronously processes each item of an array with an exponentially increasing delay.
 * The delay starts at 1 second and doubles for each subsequent item (1s, 2s, 4s, 8s, ...).
 *
 * @template T The type of the items in the array.
 * @param items The array of items to process.
 * @param writer A callback function to execute for each item.
 */
export async function getArrayItemsWithDelay<T>(items: T[], writer: (item: T) => void): Promise<void> {
  let delay = 1000; // Start with a 1-second delay

  for (const item of items) {
    await new Promise(resolve => setTimeout(resolve, delay));
    writer(item);
    delay *= 2; // Double the delay for the next item
  }
}