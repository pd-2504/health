const firebaseConfig = {
    apiKey: "AIzaSyDfoQO7U0v6sQmQRtYo7DAuAt4zWDTOmgU",
    authDomain: "healthcare-21335.firebaseapp.com",
    databaseURL: "https://healthcare-21335-default-rtdb.firebaseio.com",
    projectId: "healthcare-21335",
    storageBucket: "healthcare-21335.appspot.com",
    messagingSenderId: "739464245065",
    appId: "1:739464245065:web:d7b09d46ff932c8e113498",
    measurementId: "G-9BTNRB1H7B"
  };

  firebase.initializeApp(forebaseConfig);

  var contactFormDB = forebase.database().ref('healthcare');
  document.getElementById('healthcare').addEventListener("Submit")
  function submitForm(e){
    e.preventDefault();

    var name=getElementVal('patientName');
    var location=getElementVal('location');
    var disease=getElementVal('diseaseType');
    var duration=getElementVal('duration of illness');

    console.log(name, location,diseaseType);
  }

  const getElementVal= (id) => {
    return document.getElementById(id).value; 
  }