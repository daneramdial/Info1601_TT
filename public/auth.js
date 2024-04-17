  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBd5zji0Kd04frEvXYWR9dvIiMozMCC6q4",
    authDomain: "triviatime-1c31d.firebaseapp.com",
    projectId: "triviatime-1c31d",
    storageBucket: "triviatime-1c31d.appspot.com",
    messagingSenderId: "385717513256",
    appId: "1:385717513256:web:b62e51b5f160a11050191d",
    measurementId: "G-33GMW5QP64"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  let fullName = document.getElementById("fullname");
  let contact = document.getElementById("contact");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let copassword = document.getElementById("copassword")

  window.signup = function (e) {
    if(password)
    
        if(fullName.value == "" || contact.value=="" || email.value =="" || password.value ==""){
            alert("All Field Are Required")
        }
        if(password.value == copassword.value){
         
        }
        else{
            alert("Password Confirmation is Wrong")
            return false
        }
    
        e.preventDefault();
        var obj = {
          firstName: fullName.value,
          contact: contact.value,
          email: email.value,
          password: password.value,
        };
      
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(success){
            window.location.replace('HTML/login.html')
          // console.log(success.user.uid)
          alert("signup successfully")
        })
        .catch(function(err){
          alert("Error in " + err)
        });
       console.log()
        console.log(obj);
      };