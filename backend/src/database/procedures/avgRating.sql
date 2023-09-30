CREATE OR ALTER PROCEDURE avgRating
@lessonId VARCHAR(250)
AS
BEGIN
  SELECT l.lessonTittle, r.rating AS averageRating
  FROM lessonTable l
  INNER JOIN ratingTable r ON l.lessonId = r.lessonId
  WHERE l.lessonId = @lessonId
END;
