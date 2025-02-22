$(function () {
    let path = "/components/navbar"; // Force root path first

    $.get(path, function (data) {
        $("#nav-placeholder").html(data);
    });
});

$(function () {

    let path = "/components/subj-card";
    let placeholders = [
        "#subject-placeholder-1",
        "#subject-placeholder-2",
        "#subject-placeholder-3",
        "#subject-placeholder-4"
    ]

    placeholders.forEach(function (placeholder) {
        $.get(path, function (data) {
            $(placeholder).html(data);
        });
    });
});

$(function () {
    let path = "/components/scroll_item";

    $.get(path, function (data) {
        $("#scroll_item").html(data);
    });
});