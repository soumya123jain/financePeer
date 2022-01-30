//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase';
import "firebase/storage";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBhYll44LWToS6AXg6talQ9gwDLe33o9T8",
   authDomain: "login-finance-peer.firebaseapp.com",
   projectId: "login-finance-peer",
   storageBucket: "login-finance-peer.appspot.com",
   messagingSenderId: "555939069142",
   appId: "1:555939069142:web:c33edbebade84614d99d77"
 };

 const fire = firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();
 const database = firebase.database();


 export default fire;
 export {storage,database};