import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="react-page">
            <h1>404 - Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/react">Go to Home</Link>
        </div>
    );
};

export default NotFound;
