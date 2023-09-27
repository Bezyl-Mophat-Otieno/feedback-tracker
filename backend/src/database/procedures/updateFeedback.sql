CREATE OR ALTER PROCEDURE updateFeedback
@id VARCHAR(250),
@feedback TEXT
AS BEGIN
    UPDATE feedbackTable SET feedback = @feedback WHERE id = @id;
END;
