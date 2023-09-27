CREATE OR ALTER PROCEDURE createLesson 
@lessonId  VARCHAR(250),
@lessonTittle VARCHAR(250)

AS BEGIN

INSERT INTO lessonTable (lessonId ,lessonTittle ) VALUES (@lessonId ,@lessonTittle );

END;
