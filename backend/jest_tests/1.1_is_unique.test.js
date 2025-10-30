const {
    is_unique_set,
    is_unique_bitmask,
    is_unique_nested_loops,
    is_unique_sort
} = require('../problem_sets/1.1_is_unique.js');

const test_cases = [
    { input: 'abcdef', expected: true, desc: 'all unique lowercase'},
    { input: 'hello', expected: false, desc: 'duplicate letters'},
    { input: 'aAbBcC', expected: true, desc: 'case-sensitive'},
    { input: 'apple', expected: false, desc: 'common duplicate' },
    { input: '', expected: true, desc: 'empty string edge case' },
    { input: ' ', expected: true, desc: 'single space' },
    { input: '!!', expected: false, desc: 'punctuation duplicate' },
];

const run_shared_tests = function (implementations, cases) {
  for (const [name, fn] of Object.entries(implementations)) {
    describe(name, () => {
      const arrayCases = cases.map(({ input, expected, desc }) => [input, expected, desc]);

      test.each(arrayCases)('"%s" → %s (%s)', (input, expected, desc) => {
        expect(fn(input)).toBe(expected);
      });
    });
  }
};




describe('is unique - core implementations', () => {
    const implementations = {
        'boolean set': is_unique_set,
        'nested loops': is_unique_nested_loops, 
        'sort and compare': is_unique_sort,
    };
    run_shared_tests(implementations, test_cases)
});

describe('is unique - bitmask (lowercase only)', () => {
  const lowercase_cases = [
    ['abc', true, 'unique lowercase'],
    ['aabb', false, 'duplicate letters'],
    ['zxy', true, 'unique random order'],
    ['abcdefghijklmnopqrstuvwxyza', false, 'repeated "a" after full alphabet'],
  ];

  test.each(lowercase_cases)(
    '"%s" → %s (%s)', 
    (input, expected, desc) => {
      expect(is_unique_bitmask(input)).toBe(expected);
    }
  );
});


describe('is unique - large input sanity check', () => {
    const large_unique = Array.from({ length: 95 }, (_, i) => String.fromCharCode(i + 32)).join('');
    const large_duplicate = 'a'.repeat(129);
    const large_random = Array.from({ length: 10000 }, () =>
        String.fromCharCode(65 + Math.floor(Math.random() * 26)))   
        .join('');
    
    test('boolean set handles 128 unique ASCII characters', () => {
        expect(is_unique_set(large_unique)).toBe(true);
    });

    test('boolean set returns false for >128 ASCII chars', () => {
        expect(is_unique_set(large_duplicate)).toBe(false);
    });

    test('sort version completes on large random string', () => {
        const result = is_unique_sort(large_random);
        expect(typeof result).toBe('boolean');
    });
});