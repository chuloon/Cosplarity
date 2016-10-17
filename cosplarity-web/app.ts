$().ready(() => {
    $.getScript('https://www.gstatic.com/firebasejs/3.5.0/firebase.js', function () {
        var config = {
            apiKey: "AIzaSyD8Lnr7oH-QY97adMdhLUtKBOSQONGkMr0",
            authDomain: "cosplarity.firebaseapp.com",
            databaseURL: "https://cosplarity.firebaseio.com",
            storageBucket: "cosplarity.appspot.com",
            messagingSenderId: "159653646318"
        };
        firebase.initializeApp(config);

        var database = firebase.database();

        //firebase.database().ref('users/123').set({
        //    username: "hello",
        //    email: "ben@test.com"
        //})

        return firebase.database().ref('/users/123').once('value').then((snapshot) => {
            var username = snapshot.val();
            debugger;
        });
    });

    $.get("../index/index.html", (result) => {
        $('#main-content').html(result);
    });
});