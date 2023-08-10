document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("nameInput");
    const submitButton = document.getElementById("submitButton");
    const resultDiv = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const name = nameInput.value;
        resultDiv.innerHTML = "Ahoj, " + name + "!";
    });
});
