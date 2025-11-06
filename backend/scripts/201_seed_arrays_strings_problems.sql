\set unique_prompt  'Implement an algorithm to determine if a string has all unique characters. 
                    What if you cannot use additional data structures?'

\set check_prompt   'Given 2 strings, write a method to decide if one is a permutation of the other.'

INSERT INTO problem_sets (book_id, title, category, prompt)
VALUES 
    ('1.1', 'Is Unique', 'arrays and strings', 'unique_prompt'),
    ('1.2', 'Check Permutation', 'arrays and strings', 'check_prompt' )
