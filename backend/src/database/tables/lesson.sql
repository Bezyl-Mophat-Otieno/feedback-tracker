CREATE TABLE lessonTable (
    lessonId VARCHAR(250) PRIMARY KEY NOT NULL,
    lessonTittle VARCHAR(250) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
);



-- Disable foreign key constraints
EXEC sp_MSforeachtable 'ALTER TABLE ? NOCHECK CONSTRAINT ALL'

-- Delete tables
EXEC sp_MSforeachtable 'DROP TABLE ?'



-- Enable foreign key constraints (after deleting tables)
EXEC sp_MSforeachtable 'ALTER TABLE ? CHECK CONSTRAINT ALL'