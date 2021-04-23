import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
        apiKey: "AIzaSyCBUPFyXdAEI_sPLsgrUFX8z-9Bz90Y8t0",
        authDomain: "jadore-db.firebaseapp.com",
        projectId: "jadore-db",
        storageBucket: "jadore-db.appspot.com",
        messagingSenderId: "87300054692",
        appId: "1:87300054692:web:bece5ecb3334ef13c29031",
        measurementId: "G-NZT7MW0YWB"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;