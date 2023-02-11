const submitButton = document.getElementById("submit-btn");

submitButton?.addEventListener("click", () => {
    // console.log("test");

    const titleInput = (<HTMLInputElement>document.getElementById("title")).value;

    const authorInput = (<HTMLInputElement>document.getElementById("author")).value;

    const isbnInput = (<HTMLInputElement>document.getElementById("isbn")).value;

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

    display?.appendChild(outputElement);

    // localStorage.setItem("isbn" + isbnInput, outputElement)

    removeBtn.addEventListener("click", () => {
        outputElement.innerHTML = "Data removed";

        setTimeout(() => {
            outputElement.innerHTML = "";
        }, 5000);
    });

});