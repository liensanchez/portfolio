import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZrolbXjjF4aGoih2ilakM3j97NIvPLg",
  authDomain: "projects-1479c.firebaseapp.com",
  projectId: "projects-1479c",
  storageBucket: "projects-1479c.appspot.com",
  messagingSenderId: "469505290254",
  appId: "1:469505290254:web:94fe26ab3fc004224f8c5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}