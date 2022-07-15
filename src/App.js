import './App.module.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import classes from "./App.module.css";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    console.log(props.data.dialogsData)
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div className={classes.wrapper}>
                    <Content data={props.data}/>
                </div>
            </BrowserRouter>
        </div>

    );
}

export default App;
