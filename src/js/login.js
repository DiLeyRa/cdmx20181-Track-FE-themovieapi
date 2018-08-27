// Initialize Firebase
window.initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyB3kiGe7H-c6hEtrp5sNiRtrlUsmU4dqPQ",
    authDomain: "bitacora-8a5c1.firebaseapp.com",
    databaseURL: "https://bitacora-8a5c1.firebaseio.com",
    projectId: "bitacora-8a5c1",
    storageBucket: "bitacora-8a5c1.appspot.com",
    messagingSenderId: "78055306896"
  });
};

// Logueo con Google
//LOGIN CON GOOGLE
window.initializeGoogle = () => {
  let btnGoogle = document.getElementById('btnGoogle');
  let provider = new firebase.auth.GoogleAuthProvider();
  btnGoogle.addEventListener('click',event=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
      console.log(result.user);
      swal('Bienvenidx '+ (result.user.displayName));
      document.getElementById('btnGoogle').style.display = 'none';
      var token = result.credential.accessToken;
      var user = result.user;
    })
});
};
