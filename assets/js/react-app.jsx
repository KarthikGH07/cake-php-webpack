import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Define basic placeholder components
const Home = () => (
    <div className="react-page">
        <h1>React Home Page</h1>
        <p>
            This is the React home page rendered inside the CakePHP application.
        </p>
    </div>
);

const About = () => (
    <div className="react-page">
        <h1>About Page</h1>
        <p>This is the React about page.</p>
    </div>
);

const NotFound = () => (
    <div className="react-page">
        <h1>404 - Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
    </div>
);

// Main React App component with routing
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react" element={<Home />} />
                <Route path="/react/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

// Mount the React app to the root element

const rootElement = document.getElementById("react-app");
console.log(rootElement);
if (rootElement) {
    createRoot(rootElement).render(<App />);
}
