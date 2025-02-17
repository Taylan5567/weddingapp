let nameTable = {};
fetch('../json/names.json')
    .then(response => response.json())
    .then(data => nameTable = data);

const inputDiv = document.getElementById("nameInput");

function findTable() {
    const userInput = document.getElementById("nameInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("tableResult");
    const inputField = document.getElementById("nameInput");
    const button = document.querySelector("button");
    const namesDiv = document.getElementById("names");
    const goBackButton = document.getElementById("goBack");

    // Wenn nichts eingegeben wurde, brich ab
    if (!userInput) {
        resultDiv.innerText = "Bitte einen Namen eingeben!";
        showResultAndGoBack();
        return;
    }
    
    // Passende(n) Vollnamen finden (falls es mehrere Treffer gibt, nehmen wir hier nur den ersten)
    let matchedFullName = null;
    
    // Durch alle Einträge in nameTable gehen: key = "Vorname Nachname", value = TischNummer
    for (let fullName in nameTable) {
        // Zerlege den vollen Namen in [vorname, nachname]
        // Achtung: Hier wird angenommen, dass es genau zwei Teile gibt.
        let [vorname, nachname] = fullName.toLowerCase().split(" ");

        // Prüfen, ob userInput = Vorname oder = Nachname
        if (vorname === userInput || nachname === userInput) {
            matchedFullName = fullName;  // voll "Shadi Muster" z.B.
            break; // falls du nur den ersten Treffer möchtest
        }
    }

    if (matchedFullName) {
        // Tisch-Nummer des gefundenen Vollnamens holen
        let tableNumber = nameTable[matchedFullName];

        // Jetzt alle Personen ermitteln, die dieselbe Tisch-Nummer haben
        let matchingNames = Object.entries(nameTable)
            .filter(([key, val]) => val === tableNumber)
            .map(([key, val]) => key);

            let matchingNamesHtml = matchingNames
            .map(name => `<p class="gast">${name}</p>`)
            .join("");

        // Ergebnis anzeigen
        resultDiv.innerHTML = `
        <div class="resultshow">
            <p class="inputname"><strong>Eingegebener Name:</strong> ${matchedFullName}</p>
    <p class="tablename"><strong>Tisch Nummer:</strong> ${tableNumber}</p>
    <div>
        <strong>Gäste an diesem Tisch:</strong>
        ${matchingNamesHtml}
    </div>
    </div>
        `;
    } else {
        // Falls kein Vor- oder Nachname in der Liste gefunden wurde
        resultDiv.innerText = "Name nicht gefunden.";
    }

    showResultAndGoBack();

    // Hilfsfunktion, um Anzeige zu steuern
    function showResultAndGoBack() {
        // Eingabefelder und Button verstecken
        inputField.style.display = "none";
        button.style.display = "none";
        namesDiv.style.display = "none";
        // Ergebnis und 'Zurück'-Button anzeigen
        resultDiv.style.display = "block";
        goBackButton.style.display = "block";
    }
}

// Deine Funktion zum Buchstabe-für-Buchstabe-Text
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

// Hier wird der Text "S h a d i  &  S e r h a t" schön angezeigt
let textArray = ["S", "h", "a", "d", "i", " ", "&", " ", "S", "e", "r", "h", "a", "t"];
showTextOneByOne(textArray, 200);

// Go-Back-Funktion
function goBack() {
    document.getElementById("nameInput").style.display = "block";
    document.querySelector("button").style.display = "block";
    document.getElementById("names").style.display = "block";
    document.getElementById("tableResult").style.display = "none";
    document.getElementById("goBack").style.display = "none";

    // Eingabefeld leeren
    inputDiv.value = "";
}
