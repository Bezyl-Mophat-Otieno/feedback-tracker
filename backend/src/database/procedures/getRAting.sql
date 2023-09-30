CREATE OR ALTER PROCEDURE getRatings
@lessonId VARCHAR(250)
AS BEGIN
SELECT AVG(rating) as averageRating FROM ratingTable WHERE lessonId = @lessonId
END;
