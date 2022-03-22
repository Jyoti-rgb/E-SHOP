import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKDvVbOaQAVZngg2Tctd132BVjKNTzDwY",
  authDomain: "eshop-58da4.firebaseapp.com",
  projectId: "eshop-58da4",
  storageBucket: "eshop-58da4.appspot.com",
  messagingSenderId: "904459496063",
  appId: "1:904459496063:web:f2f7786377abaf20a62d4a",
  measurementId: "G-L67CQMLBLB",
};
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();


// const auth = firebase.auth();
const auth = getAuth(firebaseApp);
