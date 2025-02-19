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
    const ueberSchrift = document.getElementById("ueberschrift");
  
    // Wenn nichts eingegeben wurde, brich ab
    if (!userInput) {
      // Zuerst: Loader zeigen
      resultDiv.innerHTML = `
        <div class="loader-container" id="loader">
          <div class="hearts">
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
          </div>
        </div>
      `;
  
      setTimeout(() => {
        // Nach dem Timeout Result anzeigen
        resultDiv.innerText = "Bitte einen Namen eingeben!";
        showResultAndGoBack();
      }, 2000); // 2000ms = 2 Sekunden, kann man anpassen
      return;
    }
  
    // Passende(n) Vollnamen finden
    let matchedFullName = null;
    for (let fullName in nameTable) {
      let [vorname, nachname] = fullName.toLowerCase().split(" ");
      if (vorname === userInput || nachname === userInput) {
        matchedFullName = fullName;
        break;
      }
    }
  
    if (matchedFullName) {
      // Erstmal Loader zeigen
      resultDiv.innerHTML = `
        <div class="loader-container" id="loader">
          <div class="hearts">
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
            <div class="heart">
              <svg viewBox="0 0 512 512">
                <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.2L256 
                         96.4l-19.9-20.5c-50.4-51.5-131.8-59.6-186.4-13.2
                         -62.2 53-66.1 149.8-9.9 207.1l193.5 199.8c3.6 3.7
                         8.5 5.7 13.7 5.7s10.1-2 13.7-5.7l193.5-199.8c56.2-57.3
                         52.3-154.1-9.9-207.1z"/>
              </svg>
            </div>
          </div>
        </div>
      `;
  
      // Nach z.B. 2 Sekunden die Ergebnisdaten zeigen
      setTimeout(() => {
        // Tisch-Nummer
        let tableNumber = nameTable[matchedFullName];
  
        // Gäste an diesem Tisch
        let matchingNames = Object.entries(nameTable)
          .filter(([_, val]) => val === tableNumber)
          .map(([key, _]) => key);
  
        let matchingNamesHtml = matchingNames
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
      }, 2000);
  
    } else {
      // Kein Treffer gefunden -> Loader + Meldung
      resultDiv.innerHTML = `
        <div class="loader-container" id="loader">
          <div class="hearts">
            <!-- ... hearts SVG ... -->
          </div>
        </div>
      `;
      setTimeout(() => {
        resultDiv.innerText = "Name nicht gefunden.";
        showResultAndGoBack();
      }, 2000);
    }
  }
  
  // Beispiel: Blendet Eingabefelder aus, zeigt 'Go Back' etc.
  function showResultAndGoBack() {
    document.getElementById("nameInput").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("ueberschrift").style.display = "none";
    document.getElementById("names").style.display = "none";
    document.getElementById("goBack").style.display = "block";
  }
  

// Go-Back-Funktion
function goBack() {
    document.getElementById("nameInput").style.display = "block";
    document.querySelector("button").style.display = "block";
    document.getElementById("names").style.display = "block";
    document.getElementById("tableResult").style.display = "none";
    document.getElementById("goBack").style.display = "none";
    document.getElementById("ueberschrift").style.display = "block";

    // Eingabefeld leeren
    inputDiv.value = "";
}




   // Sobald das Fenster vollständig geladen ist
   window.addEventListener('load', function() {
    // Warte 3 Sekunden, dann blende den Preloader aus
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 1000);
  });