import {useAuth} from '../contexts/AuthContext'

const ChatMessage = (props) => {
    const { currentUser } = useAuth()

    const { text, uid, photoURL } = props.message;
    const messageClass = uid === currentUser.uid ? 'sent' : 'received';

    return (
        <>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
        </>
    )
}

export default ChatMessage
