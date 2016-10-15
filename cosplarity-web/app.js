$().ready(function () {
    $.get("../index/index.html", function (result) {
        $('#main-content').html(result);
    });
});
//# sourceMappingURL=app.js.map