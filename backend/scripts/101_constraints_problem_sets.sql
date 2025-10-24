ALTER TABLE problem_sets
    ALTER COLUMN book_id SET NOT NULL, 
    ALTER COLUMN category SET NOT NULL, 
    ALTER COLUMN prompt SET NOT NULL; 

ALTER TABLE problem_sets
    ADD CONSTRAINT pk_problem_sets PRIMARY KEY (id);

ALTER TABLE problem_sets
    ADD CONSTRAINT uq_problems_sets_book_id UNIQUE (book_id);