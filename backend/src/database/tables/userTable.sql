CREATE TABLE userTable (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    role VARCHAR(255) DEFAULT 'user',
    password VARCHAR(255),
    profile VARCHAR(255) NULL,
    deleted BIT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

