import React,{useState} from 'react'
import ChildComponents from './ChildComponents'

export default function ParentComponent() {
    const [answer, setAnswer] = useState("")
    
    const setQuiz = (quiz)=> {
        if (quiz === 'react') {
            setAnswer(`youre answer ${quiz} is right`)
        }else{
            setAnswer(`youre answer ${quiz} is wrong`)
        }
    }
    return (
       <ChildComponents
       yourAnswer = {answer}
       onQuiz = {setQuiz}
       />
    )
}
