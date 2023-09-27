CREATE OR ALTER PROCEDURE getLesson 
@lessonId  VARCHAR(250)
AS BEGIN

SELECT * FROM lessonTable WHERE lessonId = @lessonId;

END;