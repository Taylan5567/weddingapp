
        const nameTable = {
            "Taylan": 2,
            "Mehmet": 3,
            "Ali": 4
        };

        function findTable() {
            let name = document.getElementById("nameInput").value.trim();
            let errorMessage = document.getElementById("errorMessage");

            if (nameTable[name]) {
                // Name gefunden -> Weiterleitung zur Ergebnis-Seite mit URL-Parameter
                window.location.href = `result.html?name=${encodeURIComponent(name)}&table=${nameTable[name]}`;
            } else {
                // Name nicht gefunden -> Fehlermeldung anzeigen
                errorMessage.textContent = "Name nicht gefunden.";
                errorMessage.style.display = "block";
            }
        }