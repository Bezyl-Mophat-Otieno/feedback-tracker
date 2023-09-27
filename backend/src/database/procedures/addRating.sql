CREATE OR ALTER PROCEDURE addRating
@lessonId VARCHAR(250),
@rating INT
as BEGIN
INSERT INTO ratingTable (lessonId, rating) VALUES (@lessonId, @rating);
END;