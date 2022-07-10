import classes from "./Messages.module.css";

const Messages = () => {
    return(
        <div className={classes.messages}>
            <div>
                <ul>
                    <li><a href="">LilCHill</a></li>
                    <li><a href="">LilTys</a></li>
                    <li><a href="">LilChel</a></li>
                    <li><a href="">LilTipok</a></li>
                </ul>
            </div>

            <div>
                <p>
                    lorem
                </p>
                <textarea>
                </textarea>
            </div>
        </div>
    )
}

export default Messages;
