(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBihXpN_FkNdD4KMIWGXilE8oQtoAw7LKs",
        authDomain: "movie-matcher.firebaseapp.com",
        databaseURL: "https://movie-matcher.firebaseio.com",
        projectId: "movie-matcher",
        storageBucket: "movie-matcher.appspot.com",
        messagingSenderId: "1023455338980"
    };
    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));

    });

    btnSignUp.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));

    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log("Not Logged In");
            btnLogout.classList.add('hide');
        }
    });


}());
