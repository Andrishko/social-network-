import classes from './Content.module.css'
import Feed from "./ContentMain/Feed";
import Messages from "./Messages/Messages";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Content = () => {
    return(

            <div className={classes.content}>
                <Routes>
                    <Route path='/feed/*' element={<Feed/>}/>
                    <Route path='/chat/*' element={<Messages/>}/>
                </Routes>
                <div className={classes.sidebar}>

                </div>
            </div>

    );
}

export default Content;