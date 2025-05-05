let nameTable = {};
fetch('../json/names.json')
  .then(response => response.json())
  .then(data => nameTable = data);

const inputDiv = document.getElementById("nameInput");

function findTable() {
  const userInput = inputDiv.value.trim().toLowerCase();
  const resultDiv = document.getElementById("tableResult");

  if (!userInput) {
    // Wenn nichts eingegeben wurde
    resultDiv.innerText = "Bitte einen Namen eingeben!";
    showResultAndGoBack();
    return; // nicht weitersuchen
  }

  // Suche nach passendem Namen
  let matchedFullName = null;
  for (let fullName in nameTable) {
    const [vorname, nachname] = fullName.toLowerCase().split(" ");
    if (vorname === userInput || nachname === userInput) {
      matchedFullName = fullName;
      break;
    }
  }

  if (matchedFullName) {
    // Treffer gefunden
    const tableNumber = nameTable[matchedFullName];
    const matchingNames = Object.entries(nameTable)
      .filter(([_, val]) => val === tableNumber)
      .map(([key]) => key);

    const matchingNamesHtml = matchingNames
      .map(name => `<p class="gast">${name}</p>`)
      .join("");

    resultDiv.innerHTML = `
      <div class="resultbackground">
        <div class="resultshow">
          <p class="inputname"><strong>Herzlich Willkommen</strong> ${matchedFullName}</p>
          <p class="tablename"><strong>Deine Tisch Nummer:</strong> ${tableNumber}</p>
          <div>
            <strong>Gäste an diesem Tisch:</strong>
            ${matchingNamesHtml}
          </div>
        </div>
      </div>
    `;
    showResultAndGoBack();

  } else {
    // Kein Treffer
    resultDiv.innerText = "Name nicht gefunden.";
    showResultAndGoBack();
  }
}

function showResultAndGoBack() {
  document.getElementById("nameInput").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("ueberschrift").style.display = "none";
  document.getElementById("names").style.display = "none";
  document.getElementById("goBack").style.display = "block";
}

function goBack() {
  document.getElementById("nameInput").style.display = "block";
  document.querySelector("button").style.display = "block";
  document.getElementById("names").style.display = "block";
  document.getElementById("tableResult").style.display = "none";
  document.getElementById("goBack").style.display = "none";
  document.getElementById("ueberschrift").style.display = "block";
  inputDiv.value = "";
  reloadPage();
}

function reloadPage() {
  window.location.reload();
}

// Nur der Seiten-Preloader hat noch ein Timeout (z.B. 1 Sekunde)
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('pageLoader').style.display = 'none';
  }, 1000);
});
