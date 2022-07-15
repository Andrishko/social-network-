import classes from './Content.module.css'
import Feed from "./ContentMain/Feed";
import Chat from "./Messages/Chat";
import {Routes, Route} from "react-router-dom";


const Content = (props) => {

    return(

            <div className={classes.content}>
                <Routes>
                    <Route path='/feed/*' element={<Feed postData={props.data.postData}/>}/>
                    <Route path='/chat/*' element={<Chat chatData={props.data.chatData}/>}/>
                </Routes>
                <div className={classes.sidebar}>

                </div>
            </div>

    );
}

export default Content;