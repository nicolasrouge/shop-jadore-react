import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCBUPFyXdAEI_sPLsgrUFX8z-9Bz90Y8t0",
        authDomain: "jadore-db.firebaseapp.com",
        projectId: "jadore-db",
        storageBucket: "jadore-db.appspot.com",
        messagingSenderId: "87300054692",
        appId: "1:87300054692:web:bece5ecb3334ef13c29031",
        measurementId: "G-NZT7MW0YWB"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth)
                return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        console.log(snapShot);

        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                displayName, email, createdAt, ...additionalData
                        })
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }
        return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(
                doc => {
                        const { title, items } = doc.data();
                        return {
                                routeName: encodeURI(title.toLowerCase()),
                                id: doc.id,
                                title,
                                items
                        }
                }
        );
        //not sure really: TODO 
        return transformedCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
        }, {});
};

//batch
export const addCollectionAndDocuments = async (
        collectionKey,
        objectsToAdd
) => {
        const collectionRef = firestore.collection(collectionKey);

        const batch = firestore.batch();
        objectsToAdd.forEach((obj) => {
                const newDocRef = collectionRef.doc();
                batch.set(newDocRef, obj);
        });

        return await batch.commit();
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;