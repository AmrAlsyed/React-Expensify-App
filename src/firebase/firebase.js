// import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, remove, get, onValue, off, push, onChildAdded} from "firebase/database";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();

  export {app , push, database, ref, get, remove, update, googleAuthProvider, auth}

  
  // onChildAdded(ref(database, 'expenses'), (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // // onValue(ref(database, 'expenses'), (snapshot) => {
  // //   const expenses = []

  // //   snapshot.forEach((childSnapshop) => {
  // //     expenses.push({
  // //       id: childSnapshop.key,
  // //       ...childSnapshop.val()
  // //     })
  // //   })
  // //   console.log(expenses)
  // // })
  // push(ref(database, 'expenses'), {
  //   description: 'Food',
  //   note: '',
  //   amount: 1200,
  //   createdAt: 3044002
  // })