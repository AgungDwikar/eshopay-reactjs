import React, { useState } from "react";

export default function CounterHook() {
    // penggunann state di react functional component yaitu dengan menggunakan hook

    const [counter, setCounter] = useState(5);
    return (
        <div>
            <h1>Counter With Hook</h1>
            <h3>Counter : {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <hr></hr>
        </div>
    );
}
