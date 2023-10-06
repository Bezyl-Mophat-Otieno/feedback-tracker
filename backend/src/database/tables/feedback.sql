CREATE TABLE feedbackTable (
    id VARCHAR(250) PRIMARY KEY,
    lessonId VARCHAR(250),
    feedback VARCHAR(250) NOT NULL,
    serviced BIT DEFAULT 0,
    createdAt DATETIME  DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lessonId) REFERENCES lessonTable(lessonId)
)


-- Drop the table
DROP TABLE feedbackTable
