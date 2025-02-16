import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="react-page">
            <h1>React Home Page</h1>
            <p>
                This is the React home page rendered inside the CakePHP
                application.
            </p>
            <Link to="/react/about">Go to About Page</Link>
        </div>
    );
};

export default Home;
