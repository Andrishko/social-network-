import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/DialogItem";



const Chat = (props) => {
    let MessagesElement = props.chatData.messagesData.map((message) => <Message message={message.message} id={message.id}/>)
    let dialogsElements = props.chatData.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    return (
        <div className={classes.messages}>
            <div className={classes.friend_list}>
                {dialogsElements}
            </div>

            <div>

                {MessagesElement}
                <textarea>
                </textarea>
            </div>
        </div>
    )
}

export default Chat;
