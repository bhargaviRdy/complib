let cancelBtns = document.querySelectorAll(".cancel");
let userchips = document.querySelector("#inputchips");
let chips = document.querySelector(".chips");
console.log(cancelBtns);

cancelBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        console.log(event.target.parentNode.parentNode);
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    });
});

function updateChips() {
    let cancelBtns = document.querySelectorAll(".cancel");
    cancelBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            console.log(event.target.parentNode.parentNode);
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
        });
    });

}

userchips.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log(document.querySelector("#inputchips").value);
        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-times-circle");

        let btn = document.createElement("button");
        btn.setAttribute("class", "cancel");
        btn.appendChild(icon);

        let chipDiv = document.createElement("div");
        chipDiv.setAttribute("class", "chip");
        chipDiv.setAttribute("id", document.querySelector("#inputchips").value);

        let text = document.createTextNode(document.querySelector("#inputchips").value + " ");

        chipDiv.appendChild(text);
        chipDiv.appendChild(btn);

        chips.appendChild(chipDiv);

        updateChips();
        document.querySelector("#inputchips").value = "";

    }
})