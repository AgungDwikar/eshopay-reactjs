import React, { useState, useEffect } from "react";
import apiCategory from "../../api/apiCategory";
import { useHistory } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);
    // defined hodtory
    let history = useHistory();

    // fase didmount, yang mana di eksekusi satun kali
    useEffect(() => {
        apiCategory.list().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <div>
            <h2>List Of Category</h2>
            <button onClick={() => history.push("/")}>go back</button>
            <button onClick={() => history.push("/category/new")}>Add Category</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>category Id</th>
                        <th>category Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories &&
                        categories.map((cate) => (
                            <tr>
                                <td>{cate.cate_id}</td>
                                <td>{cate.cate_name}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Categories;
