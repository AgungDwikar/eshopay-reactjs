import React from "react";

export default function ChildComponents(props) {
    return (
        <div>
            <h2>Quiz Programming</h2>
            <p>what programming for build cross-platform</p>
            <button onClick={() => props.onQuiz("nodeJs")}>NodeJs</button>
            <button onClick={() => props.onQuiz("python")}>Python</button>
            <button onClick={() => props.onQuiz("golang")}>Golang</button>
            <button onClick={() => props.onQuiz("react")}>React</button>
            <h2>{props.yourAnswer}</h2>
        </div>
    );
}
