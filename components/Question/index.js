// import {useState} from "react";
import QuizButton from "../QuizButton";

let quizQuestions = [
    {
        id: 1,
        question: "Which one is the skeleton language of the webpage",
        answers: ['html', 'css', 'js', 'react'],
        correct: 'html'
    },
    {
        id: 2,
        question: "CSS stands for",
        answers: ['css', 'abc', 'html', 'hty'],
        correct: 'css'
    },
    {
        id: 3,
        question: "MERN stack does not include",
        answers: ['Express', 'Native', 'React', 'Node'],
        correct: 'Native'
    },
    {
        id: 4,
        question: "To transfer the data between components, we use;",
        answers: ['States', 'Variables', 'components', 'Props'],
        correct: 'Props'
    },
    {
        id: 5,
        question: "In how many types can components be classified?",
        answers: ['1', '2', '3', '4'],
        correct: '2'
    }
];


function Question(props) {
    return <>
        <p><b>Question # {quizQuestions[props.quizLevel - 1].id}</b></p>
        <p>{quizQuestions[props.quizLevel - 1].question}</p>
        <div name='quizQuestionOptions' style={{textAlign:"left"}} width="40%">


            {quizQuestions[props.quizLevel - 1].answers.map((value, index) => {
                return <><input type="radio" id={"Option" + (index + 1)} name={"Question" + props.quizLevel} value={value} onClick={() => {
                    props.setSelectedAnswer(value)
                    // console.log('setSelectedAnswer:',props.selectedAnswer)
                    // console.log(props.quizScore)
                }} /> <label>{value}</label><br></br></>
            })}
        </div>




        {/* <ul>
            {quizQuestions[props.questionNumber - 1].answers.map((value, index) => {
                return <li>{index}. {value}</li>
            })}
        </ul> */}

        {props.quizLevel - 1 < 4
            ? <QuizButton name="Next Question" setQuizLevel={props.setQuizLevel} quizLevel={props.quizLevel} selectedAnswer={props.selectedAnswer} correctAnswer={quizQuestions[props.quizLevel - 1].correct} setCorrectAnswer={props.setCorrectAnswer} setQuizScore={props.setQuizScore} quizScore={props.quizScore} setQuizPercentage={props.setQuizPercentage} quizPercentage={props.quizPercentage} />

            : <QuizButton name="Result" setQuizLevel={props.setQuizLevel} quizLevel={props.quizLevel} selectedAnswer={props.selectedAnswer} correctAnswer={quizQuestions[props.quizLevel - 1].correct} setCorrectAnswer={props.setCorrectAnswer} setQuizScore={props.setQuizScore} quizScore={props.quizScore} setQuizPercentage={props.setQuizPercentage} quizPercentage={props.quizPercentage}/>
        }
    </>
}

export default Question





