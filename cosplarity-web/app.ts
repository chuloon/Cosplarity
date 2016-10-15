$().ready(() => {
    $.get("/index/index.html", (result) => {
        $('#main-content').html(result);
    })
});