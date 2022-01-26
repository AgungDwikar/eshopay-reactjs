import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
        <h3>welcome home</h3>
        <div>
            <Link to="/category"><button>goto category</button></Link>
        </div>
        <div>
        <Link to="/product"><button>goto product</button></Link>
        </div>
        </>
        
    );
}
