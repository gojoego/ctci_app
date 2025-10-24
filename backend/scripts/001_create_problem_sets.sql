CREATE TABLE IF NOT EXISTS problem_sets (
    id SERIAL,   
    book_id VARCHAR(50), 
    category problem_category, 
    prompt VARCHAR(50), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
