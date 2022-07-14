import classes from "./NewPost.module.css"

const NewPost = () => {
    return (
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
    )
}

export default NewPost;
