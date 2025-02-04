const nameTable = {
    "Taylan": 2,
    "Mehmet": 3,
    "Ali": 4
};

function findTable() {
    let name = document.getElementById("nameInput").value.trim();

    if (nameTable[name]) {
        localStorage.setItem("tableResult", `Der Tisch für ${name} ist Tisch Nummer ${nameTable[name]}.`);
    } else {
        localStorage.setItem("tableResult", "Name nicht gefunden.");
    }

    // Weiterleiten zur Ergebnis-Seite
    window.location.href = "./result.html";
}

function animateText(text, speed) {
    let index = 0;
    let element = document.getElementById('uberSchrift');
    element.textContent = "";

    function addLetter() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(addLetter, speed);
        } else {
            cursor.style.display = "none"; // Cursor ausblenden nach der Animation
        }
    }
    addLetter();
}

document.addEventListener("DOMContentLoaded", function() {
    animateText("Shadi & Serhat", 100);
});