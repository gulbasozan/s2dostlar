import { useRef , useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChatMessage from '../ChatMessage'
import { firestore, storage } from '../../firebase.js'
import { useAuth } from '../../contexts/AuthContext'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';



const DarkChat = () => {

    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    
    const [messages] = useCollectionData(query, { idField: 'id' });

    const { currentUser } = useAuth();
    const { uid } = currentUser;
    
    const [formValue, setFormValue] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        storage.ref('users/' + uid + '/profile.jpg').getDownloadURL().then(imgSrc => {
            setPhotoURL(imgSrc);
            console.log(photoURL);
        }).catch((err) => {
            console.log(err)
        });

        return null
    }, [])
    
    
    const sendMessage = async (e) => {
        e.preventDefault();
    
        await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL:photoURL
        })
    
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Link style={{textDecoration: 'none'}} to='/'><h3>Anasayfa</h3></Link>
            <main className={'texting-field'}>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </main>
            <form onSubmit={sendMessage} className={'texting-submit'}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} style={{backgroundColor:'#2f3133'}} />
                <button type="submit" disabled={!formValue}>🔥</button>
            </form>
        </>
    )
}

export default DarkChat
