"use strict";
const submitButton = document.getElementById("submit-btn");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    const titleInput = document.getElementById("title").value;
    const authorInput = document.getElementById("author").value;
    const isbnInput = document.getElementById("isbn").value;
    const outputElement = document.createElement("div");
    outputElement.setAttribute("class", "cards");
    const info = document.createElement("p");
    info.textContent = titleInput + " | " + authorInput + " | " + isbnInput;
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "remove-btn");
    removeBtn.textContent = "X";
    outputElement.appendChild(info);
    outputElement.appendChild(removeBtn);
    const display = document.getElementById("display-container");
    display === null || display === void 0 ? void 0 : display.appendChild(outputElement);
    removeBtn.addEventListener("click", () => {
        outputElement.innerHTML = "";
    });
});
