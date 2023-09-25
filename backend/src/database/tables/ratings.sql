CREATE TABLE ratingTable(
    lessonId VARCHAR(255),
    rating INT,
    FOREIGN KEY (lessonId) REFERENCES lessonTable(lessonId)
)