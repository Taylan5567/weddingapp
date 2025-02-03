const tableNumbers = {
    "Alice": 2,
    "Bob": 3,
    "Charlie": 1,
    "David": 4,
    "Eve": 2,
    "Frank": 3,
    "Grace": 1,
    "Hannah": 4,
    "Ivy": 2,
    "Jack": 3,
    "Karen": 1,
    "Leo": 4,
    "Mona": 2,
    "Nina": 3,
    "Oscar": 1,
    "Paul": 4,
    "Quincy": 2,
    "Rachel": 3,
    "Steve": 1,
    "Tina": 4
};

function searchTabel () {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("table");
    names.forEach(name => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const tableCell = row.insertCell(1);
        nameCell.textContent = name;
        tableCell.textContent = `Tisch ${tableNumbers[name]}`;
    });
});