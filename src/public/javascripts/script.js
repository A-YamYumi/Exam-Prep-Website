function more_items() {
    var element = document.getElementById("dropdown-item")
    if (element.classList.contains("hidden"))
        element.classList.remove("hidden")
    else
        element.classList.add("hidden")
}