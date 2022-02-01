import React, { useState, useEffect } from "react";
import apiCategory from "../../api/apiCategory";
import { useNavigate, Link, Outlet } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    // defined hodtory
    let navigate = useNavigate();

    // fase didmount, yang mana di eksekusi satun kali
    useEffect(() => {
        apiCategory.list().then((data) => {
            setCategories(data);
            setLoading(true);
        });
    }, []);

    return (
        <>
            <div className="ml-3 mt-5">
                <h2 className="text-blue-500">List Of Category</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                    onClick={() => navigate("/")}
                >
                    go back
                </button>
                <Link to="addcategory">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-3">
                        Add Category
                    </button>
                </Link>
                {loading ? (
                    <table className="border-collapse border border-slate-400 mt-1">
                        <thead className="border border-slate-300">
                            <tr>
                                <th className=" border border-slate-300">
                                    category Id
                                </th>
                                <th className=" border border-slate-300">
                                    category Name
                                </th>
                            </tr>
                        </thead>
                        <tbody className="class= border border-slate-300">
                            {categories &&
                                categories.map((cate, index) => (
                                    <tr key={index} className=" border border-slate-300">
                                        <td className=" border border-slate-300">
                                            {cate.cate_id}
                                        </td>
                                        <td className=" border border-slate-300">
                                            {cate.cate_name}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                ) : (
                    // <div className="text-blue-700 font-bold py-2 rounded mt-5 flex">
                    //     process...
                    // </div>
                    <button className="bg-blue-600 p-3 rounded-full flex space-x-3 mt-5">
                        <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                        <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                        <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                    </button>
                )}
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Categories;
