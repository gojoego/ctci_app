\set unique_prompt  'Implement an algorithm to determine if a string has all unique characters. 
                    What if you cannot use additional data structures?'

\set check_prompt   'Given 2 strings, write a method to decide if one is a permutation of the other.'

\set str_compress   'Implement a method to perform basic string compression using the counts of repeated characters.
                    For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not 
                    become smaller than the original string, your method should return the original string. You can
                    assume the string has only uppercase and lowercase letters (a - z).'

INSERT INTO problem_sets (book_id, title, category, prompt)
VALUES 
    ('1.1', 'Is Unique', 'arrays and strings', 'unique_prompt'),
    ('1.2', 'Check Permutation', 'arrays and strings', 'check_prompt' ), 
    ('1.6', 'String Compression', 'arrays and strings', 'str_compress')
