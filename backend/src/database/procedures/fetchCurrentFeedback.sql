CREATE OR ALTER PROCEDURE fetchCurrentFeedback
@id VARCHAR(250)
AS
BEGIN
	SELECT * FROM feedbackTable WHERE lessonId = @id AND serviced = 0 ORDER BY createdAt DESC
END;