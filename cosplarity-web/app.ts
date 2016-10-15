$().ready(() => {
    $.get("../pages/index/index.html", (result) => {
        $('#main-content').html(result);
    })
});