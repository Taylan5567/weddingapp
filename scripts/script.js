const nameTable = {
    "Taylan": 2,
    "Mehmet": 3,
    "Ali": 4
};

function findTable() {
    let name = document.getElementById("nameInput").value.trim();
    let resultDiv = document.getElementById("tableResult");
    let inputField = document.getElementById("nameInput");
    let button = document.querySelector("button");
    let namesDiv = document.getElementById("names");
    let goBackButton = document.getElementById("goBack");

    if (nameTable[name]) {
        resultDiv.innerText = `Tisch Nummer: ${nameTable[name]}`;
    } else {
        resultDiv.innerText = "Name nicht gefunden.";
    }
    
    inputField.style.display = "none";
    button.style.display = "none";
    namesDiv.style.display = "none";
    resultDiv.style.display = "block";
    goBackButton.style.display = "block";
}

function showTextOneByOne(text, delay = 200) {
    let index = 0;
    const targetDiv = document.getElementById("names");
    targetDiv.innerHTML = "";
    
    function displayNextLetter() {
        if (index < text.length) {
            targetDiv.innerHTML += text[index];
            index++;
            setTimeout(displayNextLetter, delay);
        }
    }
    
    displayNextLetter();
}

let textArray = ["S", "h", "a", "d", "i", " ", "&", " ", "S", "e", "r", "h", "a", "t"];
showTextOneByOne(textArray, 200);

function goBack() {
    document.getElementById("nameInput").style.display = "block";
    document.querySelector("button").style.display = "block";
    document.getElementById("names").style.display = "block";
    document.getElementById("tableResult").style.display = "none";
    document.getElementById("goBack").style.display = "none";
}