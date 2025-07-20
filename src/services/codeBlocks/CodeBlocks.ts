/**
  Write an efficient method that tells us whether or not an input string brackets ("{", "}",
  "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
  “{([)]}” => false
 *
 * @param s The input string to check.
 * @returns True if the brackets are properly balanced, false otherwise.
 */
export function areBracketsBalanced(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            // It's an opening bracket
            stack.push(char);
        } else if (Object.values(map).includes(char)) {
            // It's a closing bracket
            if (stack.length === 0) {
                return false; // No opening bracket to match
            }
            const lastOpenBracket = stack.pop();
            if (map[lastOpenBracket!] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    return stack.length === 0; // All opening brackets should have been closed
}
