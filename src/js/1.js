function changeColor(element) {
    var currentColor = element.style.backgroundColor;
    if (currentColor == "red") {
        element.style.backgroundColor = "green";
    }
    else{
        element.style.backgroundColor = "red";
    }
}