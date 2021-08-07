import React from "react";
import Frame from './components/frame'; // import our frame component
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <nav>
                <h1><a href="/">Universal Calculator</a></h1>
            </nav>
            <section>
                <Frame />
            </section>
            <footer>
                Copyright &copy; 2021 Universal Calculator
            </footer>
        </div>
    )
}

export default App;
