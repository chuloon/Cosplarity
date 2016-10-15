$().ready(function () {
    $.get("../pages/index/index.html", function (result) {
        $('#main-content').html(result);
    });
});
//# sourceMappingURL=app.js.map