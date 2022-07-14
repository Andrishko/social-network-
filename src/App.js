import './App.module.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import classes from "./App.module.css";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div className={classes.wrapper}>
                    <Content/>
                </div>
            </BrowserRouter>
        </div>

    );
}

export default App;
