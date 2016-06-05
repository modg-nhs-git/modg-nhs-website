function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var grade = parseInt(document.getelementById('grade').value);
  if (password.length < 7) {
    alert('Password must be longer than six characters.');
    return;
  } else if (fname == "") {
    alert('First name is required.');
    return;
  } else if (lname == "") {
    alert('Last name is required.');
    return;
  } else if (grade == "" || (parseInt(grade) > 8 && parseInt(grade) < 13) ) {
    alert('Please enter a valid grade');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  var user = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else if (errorCode == 'auth/invalid-email') {
      alert('Please enter a valid email.');
    } else {
      console.error(error);
    }
    // [END_EXCLUDE]
  });
  if (user.ca != undefined ) {
    firebase.database().ref('users/' + email).set({
      username: email,
      email: email,
      fname: fname,
      lname: lname,
      grade: grade
    });
  }
  // [END createwithemail]
}

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else if ( errorCode === "auth/user-not-found" ) {
        alert('User not found');
      } else {
        console.error(error);
      }
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
}
