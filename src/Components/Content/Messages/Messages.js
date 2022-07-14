import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/DialogItem";




let dialogsData = [
    {id: 1, name: "LilChill"},
    {id: 2, name: "LilTys"},
    {id: 3, name: "LilChel"},
    {id: 4, name: "LilTipok"},
];

let dialogsElements = dialogsData.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/> )

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you "},
    {id: 3, message: "Sho tu dyada"},
];

let MessagesElement = messagesData.map ((message) => <Message message={message.message} id={message.id}/>)




const Messages = () => {
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

export default Messages;
