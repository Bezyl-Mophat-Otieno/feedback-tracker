CREATE OR ALTER PROCEDURE deleteLesson 
@lessonId  VARCHAR(250)
AS BEGIN
DELETE lessonTable WHERE lessonId = @lessonId;

END;