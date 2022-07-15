import classes from "./Feed.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";





const Feed = (props) => {
    let postElements = props.postData.map( (post) =>  <Post text={post.message} id={post.id} likesCount={post.likesCount}/>)

    return (
        <div className={classes.content_main}>
            <NewPost/>
            {postElements}
        </div>

    );
}

export default Feed;
