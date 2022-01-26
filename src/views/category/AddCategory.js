import React from "react";
import { useHistory } from "react-router-dom";

export default function AddCategory() {
    let history = useHistory()
    return (
        <div>
            <h3>Add category</h3>
            <button onClick={() => history.push("/")}>cancel</button>
        </div>
    );
}
