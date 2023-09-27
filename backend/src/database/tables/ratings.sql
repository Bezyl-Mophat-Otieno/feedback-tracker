CREATE TABLE ratingTable(
    lessonId VARCHAR(250),
    rating INT,
    FOREIGN KEY (lessonId) REFERENCES lessonTable(lessonId)
)
