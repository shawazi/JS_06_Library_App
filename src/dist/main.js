"use strict";
const submitButton = document.getElementById("submit-btn");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    console.log("test");
    const titleInput = document.getElementById("title").value;
    const authorInput = document.getElementById("author").value;
    const isbnInput = document.getElementById("isbn").value;
    const outputElement = document.createElement("div");
    outputElement.setAttribute("class", "cards");
    const info = document.createElement("p");
    info.textContent = titleInput + " | " + authorInput + " | " + isbnInput + " | " + "X";
    outputElement.appendChild(info);
    const display = document.getElementById("display-container");
    display === null || display === void 0 ? void 0 : display.appendChild(outputElement);
});
