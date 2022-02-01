import React from "react";
import { Link} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-5">
                Eshopay TailwindCss
            </h1>
            <h3 className="ml-3">Eshopay Home</h3>
            <div>
                <Link to="category">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-3">
                        goto category
                    </button>
                </Link>
                <Link to="product">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-3">
                        goto product
                    </button>
                </Link>
                <Link to="flexbox">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-3">
                        goto flexbox
                    </button>
                </Link>
            </div>
        </>
    );
}
