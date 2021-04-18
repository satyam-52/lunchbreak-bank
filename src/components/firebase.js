import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP48kKOrv_xfmQrjoYtrgfUSHVdgCA2UM",
  authDomain: "lunchbreak-bank.firebaseapp.com",
  projectId: "lunchbreak-bank",
  storageBucket: "lunchbreak-bank.appspot.com",
  messagingSenderId: "89597742789",
  appId: "1:89597742789:web:96efdafbf8aa3a2ffe6aac",
  measurementId: "G-QG373RJ3F9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const addUser = ([name, accountNo, balance]) => {
  return db
    .collection("users")
    .add({ name: name, accountNo: accountNo, balance: balance });
};

export const addTransaction = (amount, to, from) => {
  return db
    .collection("transactions")
    .add({ amount: amount, to: to, from: from });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
