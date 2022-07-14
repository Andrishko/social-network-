import classes from "./Feed.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

let postData = [
    {id: 1, message: "Wasssup", likesCount: 15},
    {id: 2, message: "sheeeesh", likesCount: 2},
]

let postElements = postData.map( (post) =>  <Post text={post.message} id={post.id} likesCount={post.likesCount}/>)

const Feed = () => {
    return (
        <div className={classes.content_main}>
            <NewPost/>
            {postElements}
        </div>

    );
}

export default Feed;
