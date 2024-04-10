import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwc4JssfAOOvSynzfBwsMyPO0pAsCgoSw",
  authDomain: "emails-8fc7c.firebaseapp.com",
  projectId: "emails-8fc7c",
  storageBucket: "emails-8fc7c.appspot.com",
  messagingSenderId: "73822462013",
  appId: "1:73822462013:web:e04eaee845589924b44a54",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveContact(contactData) {
  const docRef = await addDoc(collection(db, "contacts"), contactData);
  return docRef.id;
}
