import classes from "./ContentMain.module.css";
import Post from "./Post/Post";

const ContentMain = () => {
    return (
        <div className={classes.content_main}>
            <div className={classes.newPost}>
                <p>NEW POST</p>
                <div className={classes.newPost_bottom}>
                    <textarea placeholder={"What`s on your mind"}/>
                    <div className={classes.newPost_bottom_img}>
                        <img src="/assets/paperclip.svg" alt=""/>
                        <img src="/assets/image.svg" alt=""/>
                        <img src="/assets/film.svg" alt=""/>
                        <img src="/assets/sendText.svg" alt=""/>
                    </div>
                </div>
            </div>

           <Post text='Wasuuup'/>
            <Post text='sheeeeeesh'/>

        </div>

    );
}

export default ContentMain;
