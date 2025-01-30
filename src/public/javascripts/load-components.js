$(function () {
    let path = "/components/navbar"; // Force root path first

    // Load navbar
    $.get(path, function (data) {
        $("#nav-placeholder").html(data);
    });
});