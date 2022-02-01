import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
    let navigate = useNavigate();
    return (
        <div class="w-full max-w-xs mt-5 ml-3">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                    >
                        Category Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="catname"
                        type="text"
                        placeholder="Category Name"
                    ></input>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                        type="submit"
                    >
                        Submit
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-2"
                        onClick={() => navigate("/category")}
                    >
                        go back
                    </button>
                </div>
            </form>
        </div>
    );
}
