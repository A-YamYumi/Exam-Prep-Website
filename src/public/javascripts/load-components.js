$(function () {
    let path = "/components/navbar"; // Force root path first

    $.get(path, function (data) {
        $("#nav-placeholder").html(data);
    });
});

$(function () {

    let path = "/components/subj-card";
    let placeholders = document.getElementsByClassName("subject-placeholder");
    for (let i = 0; i < placeholders.length; i++) {
        $.get(path, function (data) {
            $(placeholders[i]).html(data);
        });
    }
});

$(function () {
    let path = "/components/scroll_item";

    $.get(path, function (data) {
        $("#scroll_item").html(data);
    });
});

$(function () {

    let path = "/components/lesson_compo";
    let placeholders = document.getElementsByClassName("lesson-placeholder");

    for (let i = 0; i < placeholders.length; i++) {
        $.get(path, function (data) {
            $(placeholders[i]).html(data);
        });
    }
});

$(function () {

    let path = "/components/noti-item";
    let placeholders = document.getElementsByClassName("noti-placeholder");

    for (let i = 0; i < placeholders.length; i++) {
        $.get(path, function (data) {
            $(placeholders[i]).html(data);
        });
    }
});

$(function () {
    let path = "/components/navbar-auth";

    $.get(path, function (data) {
        $("#navbar-auth-placeholder").html(data);
    });
});