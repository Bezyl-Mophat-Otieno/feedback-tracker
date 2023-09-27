CREATE OR ALTER PROCEDURE serviceFeedback
@id VARCHAR(250)
AS BEGIN
UPDATE feedbackTable SET serviced = 1 WHERE id = @id;
END;