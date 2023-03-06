import { useState } from "react";
import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap";

function Quiz() {
  const questions = [
    {
      question: "Où a été fondé Gestion Imax",
      choices: ["Paris", "Londre", "Montreal", "Berlin"],
      correctAnswer: "Montreal",
    },
    {
      question: "Gestion Imax offre des services de gestion immobilière administrative, de location et de maintenance",
      choices: ["Vrai", "Faux"],
      correctAnswer: "Vrai",
    },
    // Add more questions here
  ]; const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleNextClick = () => {
    // Check if the user's answer is correct and update the score
    const selectedChoice = document.querySelector('input[name="choice"]:checked')?.value;
    if (selectedChoice === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or mark the quiz as completed
    if (currentQuestionIndex === questions.length - 1) {
      setIsCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRedoClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsCompleted(false);
  };

  // Display the results if all questions have been answered
  if (isCompleted) {
    return (
      <Container className="bg-info rounded-3">
        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Results</h3>
            <p>Your score is {score} out of {questions.length}.</p>
            <Button onClick={handleRedoClick}>Redo</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  // Display the current question
  return (
    <Container className="bg-secondary rounded-3">
      <Row className="justify-content-center">
        <Col md={6}>
        <ProgressBar now={progress} label={`${progress}%`} />
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{currentQuestion.question}</p>
          <Form>
            {currentQuestion.choices.map((choice, index) => (
              <Form.Check
                type="radio"
                key={index}
                id={`choice${index}`}
                name="choice"
                label={choice}
                value={choice}
              />
            ))}
          </Form>
          <Button onClick={handleNextClick}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Quiz;