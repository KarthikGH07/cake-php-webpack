import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="react-page">
            <h1>About Page</h1>
            <p>This is the React about page.</p>
            <Link to="/react">Back to Home</Link>
        </div>
    );
};

export default About;
