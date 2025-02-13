$(function () {
    let path = "/components/navbar"; // Force root path first

    // Load navbar
    $.get(path, function (data) {
        $("#nav-placeholder").html(data);
    });
});

$(function () {
    let path = "/components/subj_card";
    let placeholders = [
        "#subject-placeholder-1",
        "#subject-placeholder-2",
        "#subject-placeholder-3"
    ]

    placeholders.forEach(function (placeholder) {
        $.get(path, function (data) {
            $(placeholder).html(data);
        });
    });
});