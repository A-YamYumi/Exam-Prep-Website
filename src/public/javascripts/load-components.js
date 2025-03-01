$(function () {
    let path = "/components/navbar"; // Force root path first

    $.get(path, function (data) {
        $("#nav-placeholder").html(data);
    });
});

$(function () {

    let path = "/components/subj-card";
    let placeholders = document.getElementsByClassName("subject-placeholder");
    console.log(placeholders);

    // let placeholders = [
    //     "#subject-placeholder-1",
    //     "#subject-placeholder-2",
    //     "#subject-placeholder-3",
    //     "#subject-placeholder-4"
    // ]

    //load components
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