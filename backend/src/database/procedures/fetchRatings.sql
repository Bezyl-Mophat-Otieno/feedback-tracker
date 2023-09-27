CREATE OR ALTER PROCEDURE fetchRatings
AS BEGIN

SELECT l.lessonTittle , AVG(r.rating) AS averageRating FROM lessonTable l INNER JOIN ratingTable r ON l.lessonId = r.lessonId GROUP BY l.lessonTittle;

END;