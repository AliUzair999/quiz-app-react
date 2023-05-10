 function QuizButton(props) {
    return <button onClick={() => {
        props.setQuizLevel(props.quizLevel + 1)
        // console.log(props.quizLevel)
        // console.log(props)
        // props.setQuizScore(4)
        if((props.quizLevel>0 && props.quizLevel<6 ) && props.correctAnswer === props.selectedAnswer){
            // console.log("Quiz Button on click function:" + props.quizLevel)
            props.setQuizScore(props.quizScore+1)
            props.setQuizPercentage(props.quizPercentage+20)
        }
        if(props.quizLevel===6) {
            console.log("it is 6")
            props.setQuizLevel(0)
            props.setQuizScore(0)
            props.setQuizPercentage(0)
        }
       
    }}>{props.name}</button>
}

export default QuizButton


