import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAm0qG-kmW-J1-n-4YSUQ3h2qiMaqkIxF0",
    authDomain: "letterbot-526cb.firebaseapp.com",
    databaseURL: "https://letterbot-526cb.firebaseio.com",
    projectId: "letterbot-526cb",
    storageBucket: "letterbot-526cb.appspot.com",
    messagingSenderId: "20712444767",
    appId: "1:20712444767:web:6d95c9fb13c2e2b63a9cea",
    measurementId: "G-V9K090P2WJ"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;