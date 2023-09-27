CREATE OR ALTER PROCEDURE updateLesson 
@lessonId  VARCHAR(250),
@lessonTittle VARCHAR(250)
AS BEGIN

UPDATE lessonTable SET lessonTittle = @lessonTittle WHERE lessonId = @lessonId;

END;