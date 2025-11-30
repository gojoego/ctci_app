\set is_unique      'Implement an algorithm to determine if a string has all unique characters. 
                    What if you cannot use additional data structures?'

\set check_perm     'Given 2 strings, write a method to decide if one is a permutation of the other.'

\set urlify         'Write a method to replace all spaces in a string with '%20' - you may assume that the string 
                    has sufficient space at the end to hold the additional characters, and that you are given the "true"
                    length of the string. (Note: If implementing in Java, please use a character array so that you can 
                    perform this oepration in place.)'

\set palin_perm     'Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a 
                    word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
                    The palindrome does not need to be limited to just dictionary words. You can ignore casing and 
                    non-letter characters.'

\set str_compress   'Implement a method to perform basic string compression using the counts of repeated characters.
                    For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not 
                    become smaller than the original string, your method should return the original string. You can
                    assume the string has only uppercase and lowercase letters (a - z).'

\set rotate_matrix  'Given an image represented by N x N matrix, where each pixel in the image
                    is represented by an integer, write a method to rotate the image by 90 degrees.
                    Can you do this in place?'

\set 

INSERT INTO problem_sets (book_id, title, category, prompt)
VALUES 
    ('1.1', 'Is Unique', 'arrays and strings', 'unique_prompt'),
    ('1.2', 'Check Permutation', 'arrays and strings', 'check_prompt' ), 
    ('1.6', 'String Compression', 'arrays and strings', 'str_compress')
