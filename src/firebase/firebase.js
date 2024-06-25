// import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, remove, get, onValue, off, push, onChildAdded } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAle97NZICgrSa8Fs6vZJ0O-9hu2SLKJ3Y",
    authDomain: "expensify-f1094.firebaseapp.com",
    databaseURL: "https://expensify-f1094-default-rtdb.firebaseio.com",
    projectId: "expensify-f1094",
    storageBucket: "expensify-f1094.appspot.com",
    messagingSenderId: "758753185685",
    appId: "1:758753185685:web:5205633b409c4c5361709c"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  

  export {app , push, database, ref, get, remove}

  
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