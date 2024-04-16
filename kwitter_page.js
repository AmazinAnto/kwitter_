var firebaseConfig = {
    apiKey: "AIzaSyDSbvLy39zJ_n7tDFHr19Nq6w86DPuW064",
    authDomain: "kwitter-6f08a.firebaseapp.com",
    databaseURL: "https://kwitter-6f08a-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f08a",
    storageBucket: "kwitter-6f08a.appspot.com",
    messagingSenderId: "29961243909",
    appId: "1:29961243909:web:34240ed69677f91391bb6c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function send()
{
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });
        document.getElementById("msg").value="";
}