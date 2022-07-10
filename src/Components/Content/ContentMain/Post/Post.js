import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post_header}>
                <img className={classes.post_foto} src="/assets/fotoPost.jpg" alt=""/>
                <div className={classes.post_header_text}>
                    <p className={classes.post_name}>
                        Theresa Steward
                    </p>
                    <p className={classes.post_job}>
                        iOS developer
                    </p>
                </div>
            </div>
            <p className={classes.post_text}>
                {props.text}
            </p>
        </div>
    );
}

export default Post;
