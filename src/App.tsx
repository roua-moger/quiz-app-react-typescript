import React, { userState } from 'react';
import { use } from 'vue/types/umd';
//Components 
import QustionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = userState(false);
  const [questions, setQuestions] = userState([]);
  const [number, setNumber] = userState(0);
  const [userAnswers, setUserAnswers] = userState([]);
  const [score, setScore] = userState(0);
  const [gameOver, setGameOver] = userState(true);

const startTrivia = async () => {

}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

}

  return (
  <div className="App">
    <h1>React Quiz</h1>
    <button className="start" onClick={startTrivia}>
      Start
    </button>
    <p className="score"> Score: </p>
    <p>Loading Questions ...</p>

    <QustionCard
    questionNr = {number + 1}
    totalQuestions = {TOTAL_QUESTIONS}
    question = {questions[number].question}
    answers = {questions[number].answers}
    userAnswer = {userAnswers ? userAnswers[number] : undefined}
    callback = {checkAnswer}
    />

    <button className="next" onClick={nextQuestion}>
      Next Question 
    </button>
  </div>
    );
}

export default App;
