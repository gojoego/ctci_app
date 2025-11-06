const { describe } = require('node:test');
const {
    check_permutation_counts,
    check_permutation_sort
} = require('../problem_sets/1.2_check_permutation');

const test_cases = [
    {
        s: 'cat', 
        t: 'act', 
        expected: true, 
        desc: 'simple valid permutation'
    }, 
    {
        s: 'abcdefg', 
        t: 'gfedcba',
        expected: true, 
        desc: 'reverse permutation'
    },
    {
        s: 'jjooee', 
        t: 'oojjee', 
        expected: true, 
        desc: 'duplicate letters'
    }, 
    {
        s: 'goodlucck',
        t: 'goodluckk', 
        expected: false,
        desc: 'same length, different character count'
    },
    {
        s: 'believe',
        t: 'believee',
        expected: false,
        desc: 'different lengths'
    }, 
    {
        s: '',
        t: '',
        expected: true, 
        desc: 'edge case: empty strings'
    }, 
    {
        s: 'hello', 
        t: 'Hello', 
        expected: false, 
        desc: 'case-sensitive'
    },
    {
        s: 'love ', 
        t: 'lo ve', 
        expected: true, 
        desc: 'space as char'
    }
];

const run_shared_tests = function(implementations, cases) {
    for (const [name, fn] of Object.entries(implementations)) {
        describe(name, () => {
            const cases_array = cases.map(({ s, t, expected, desc }) => [s, t, expected, desc]);
            test.each(cases_array)(
                '"%s" vs "%s" → %s (%s)',
                (s, t, expected, desc) => {
                    expect(fn(s, t)).toBe(expected);
                }
            );
        });
    }
};

// describe('testing check permutation sort function', () => {
//     test.each(cases)(
//         ({ s, t, expected, desc }) => 
//     )
// })