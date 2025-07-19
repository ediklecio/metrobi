/**
 * Finds and returns the duplicate items from a given array.
 * This function is generic and works with strings and numbers.
 * It safely handles non-array inputs and ignores null/undefined values.
 *
 * @param {(string | number | null | undefined)[]} items The array to search for duplicates.
 * @returns {(string | number)[]} An array containing only the unique duplicate items.
 */
export function findDuplicates(items: (string | number | null | undefined)[]): (string | number)[] {
  if (!Array.isArray(items)) {
    return [];
  }

  const seen = new Set<string | number>();
  const duplicates = new Set<string | number>();

  for (const item of items) {
    if (item === null || item === undefined) {
      continue;
    }

    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}
