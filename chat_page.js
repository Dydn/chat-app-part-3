
const firebaseConfig = {
    apiKey: "AIzaSyCfGQDKw-wuiv6OnaZT4ke3CT1XHgE1Bd4",
    authDomain: "shrek-chat.firebaseapp.com",
    databaseURL: "https://shrek-chat-default-rtdb.firebaseio.com",
    projectId: "shrek-chat",
    storageBucket: "shrek-chat.appspot.com",
    messagingSenderId: "202660716363",
    appId: "1:202660716363:web:9c68c8e04424d1d18b92ce",
    measurementId: "G-0KLC3BV8HB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    
    document.getElementById("msg").value = "";
}
