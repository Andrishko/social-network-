import classes from './Content.module.css'
import ContentMain from "./ContentMain/ContentMain";
import Messages from "./Messages/Messages";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Content = () => {
    return(
        <BrowserRouter>
            <div className={classes.content}>
                <Routes>
                    <Route path='/feed/*' element={<ContentMain/>}/>
                    <Route path='/chat/*' element={<Messages/>}/>
                </Routes>
                <div className={classes.sidebar}>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default Content;