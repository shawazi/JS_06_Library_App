const submitButton = document.getElementById("submit-btn");

submitButton?.addEventListener("click", () => {
    console.log("test");

    const titleInput = (<HTMLInputElement>document.getElementById("title")).value;

    const authorInput = (<HTMLInputElement>document.getElementById("author")).value;

    const isbnInput = (<HTMLInputElement>document.getElementById("isbn")).value;

    const outputElement = document.createElement("div");

    outputElement.setAttribute("class", "cards");

    const info = document.createElement("p");

    info.textContent = titleInput + " | " + authorInput + " | " + isbnInput + " | " + "X";

    outputElement.appendChild(info);
    
    const display = document.getElementById("display-container");

    display?.appendChild(outputElement);

});