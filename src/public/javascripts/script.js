function more_items() {
    var element = document.getElementById("dropdown-item")
    if (element.className === "hidden")
        element.classList.remove("hidden")
    else
        element.classList.add("hidden")
}