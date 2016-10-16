$().ready(function () {
    $.getScript('https://www.gstatic.com/firebasejs/3.5.0/firebase.js', function () {
        var config = {
            apiKey: "AIzaSyD8Lnr7oH-QY97adMdhLUtKBOSQONGkMr0",
            authDomain: "cosplarity.firebaseapp.com",
            databaseURL: "https://cosplarity.firebaseio.com",
            storageBucket: "cosplarity.appspot.com",
            messagingSenderId: "159653646318"
        };
        firebase.initializeApp(config);
    });
    $.get("../index/index.html", function (result) {
        $('#main-content').html(result);
    });
});
//# sourceMappingURL=app.js.map