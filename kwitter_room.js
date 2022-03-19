const firebaseConfig = {
      apiKey: "AIzaSyCOgRK4m3NfZ3p56_urKKOwMNapGlYKSe8",
      authDomain: "project-81-f7e4f.firebaseapp.com",
      projectId: "project-81-f7e4f",
      storageBucket: "project-81-f7e4f.appspot.com",
      messagingSenderId: "456406452182",
      appId: "1:456406452182:web:fbe2b33f63fe06e7e80677",
      measurementId: "G-2VXWLYQP9K"
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
