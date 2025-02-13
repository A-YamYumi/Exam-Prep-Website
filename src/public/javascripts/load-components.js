$(function () {
    let path = "/components/navbar"; // Force root path first

    // Load navbar
    $.get(path, function (data) {
        $("#nav-placeholder").html(data);
    });
});

$(function () {
    let path = "/components/subj-card"; // Force root path first

    // Load navbar
    $.get(path, function (data) {
        $("#subject-placeholder").html(data);
    });
});