var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.querySelectorAll(".options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectField.addEventListener("click", function() {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});

options.forEach(function(option) {
    option.addEventListener("click", function() {
        selectText.textContent = this.textContent.trim(); 
        list.classList.add("hide");
        arrowIcon.classList.remove("rotate");
    });
});