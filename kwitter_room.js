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
//ADD YOUR FIREBASE LINKS HERE

function getData()
 {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room Name - "+ Room_names);
         row="<div class='room_name' id="+Room_names+" onclick='rediarectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML+=row;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tag="<h4>"+name+"<img class='user_tick src='tick.png></h4>";
         message_with_tag="<h4 class='message_h4>"+message+"</h4>";
         like_button="<button class'btn btn-warning id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:  "+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"this is for adding room name"
      })
      
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html"
}

function rediarectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

function updateLike()
{
console.log("clicked on like button - "+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
})  ;     
}

