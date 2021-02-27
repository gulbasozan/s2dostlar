import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage'

const app = firebase.initializeApp({
    //Firebase App Config
});

export const auth = app.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default app;