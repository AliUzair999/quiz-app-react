// import logo from './logo.svg';
import './App.css';
// import CustomButton from './components/CustomButton'
import { useState } from 'react'
// import SignUp from "./views/SignUp"
// import LogIn from "./views/LogIn"

import QuizButton from './components/QuizButton'
import Question from './components/Question'


function App() {
  // const [page, setPage] = useState(false)
  // const [startButton, setStartButton] = useState(true)
  const [quizLevel, setQuizLevel] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const[selectedAnswer, setSelectedAnswer] = useState('')
  const [quizScore, setQuizScore] = useState(0)
  const [quizPercentage, setQuizPercentage] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>The quizLevel is {quizLevel}  <br/>      
        selected Answer is: {selectedAnswer}<br/> 
        Correct Answer is: {correctAnswer}<br/> 
        Score is: {quizScore}</p> */}
        <h1>Welcome to Uzair's Quiz App</h1>
        
        {quizLevel === 0 && <p>Are you ready??? <br/> <QuizButton setQuizLevel = {setQuizLevel} quizLevel={quizLevel} name="Start Quiz"/></p>}

        {(quizLevel >= 1 && quizLevel<=5) && <Question setQuizLevel = {setQuizLevel} quizLevel={quizLevel} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} quizScore={quizScore} setQuizScore={setQuizScore} setQuizPercentage={setQuizPercentage} quizPercentage={quizPercentage}/>}

        {quizLevel === 6 && <>
        <p>
          Your score is {quizScore} <br/>
          Your percentage is {quizPercentage}% <br/>
          Your Grade is: {quizPercentage>=80 && <>A</>} {(quizPercentage<80 && quizPercentage>=70) && <>B</>} {(quizPercentage<70 && quizPercentage>=50) && <>C</>} {(quizPercentage<50 && quizPercentage>=0) && <>FAIL</>} <br/>
          Your correct answers:{quizScore}<br/>
          Your incorrect answers:{5-quizScore}
          </p>
          <p> Want to re-attempt the quiz???</p>
          <QuizButton name="Try Again" setQuizLevel={setQuizLevel} setQuizScore={setQuizScore} setQuizPercentage={setQuizPercentage} quizLevel={quizLevel}/>
        </>
          }



        {/* {page ? <LogIn setPage={setPage} page={page}/> : <SignUp setPage={setPage} page={page}/>} */}


        <div>
          {/* <button onClick={() => {setPage(!page)}}>Switch</button> */}

          {/* <CustomButton name="Switch" message="Page Switched" onClick={() => {console.log("switch working")}}/> */}
        </div>


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


      </header>
    </div>
  );
}

export default App;
