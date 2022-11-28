import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "posts-7e56d.firebaseapp.com",
  projectId: "posts-7e56d",
  storageBucket: "posts-7e56d.appspot.com",
  messagingSenderId: "623409994164",
  appId: "1:623409994164:web:45c513dd04cb42cc22fae1",
  measurementId: "G-4RTSLRLHSY",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
