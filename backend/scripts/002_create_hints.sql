CREATE TABLE IF NOT EXISTS hints (
    hint_id SERIAL,
    problem_set_id VARCHAR(50),
    hint_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)