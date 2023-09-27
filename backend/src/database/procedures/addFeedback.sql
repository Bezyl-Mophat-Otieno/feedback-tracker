CREATE OR ALTER PROCEDURE addFeedback
@id VARCHAR(259),
@lessonId VARCHAR(250) ,
@feedback TEXT 
AS BEGIN
    INSERT INTO feedbackTable (id,lessonId, feedback)
    VALUES (@id,@lessonId, @feedback);
END;
