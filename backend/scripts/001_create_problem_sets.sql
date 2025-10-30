CREATE TABLE IF NOT EXISTS problem_sets (
    id SERIAL,   
    book_id VARCHAR(50),
    title VARCHAR(50),  
    category problem_category, 
    prompt TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
