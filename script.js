const tbody = document.getElementsByTagName("tbody");
const addColumn = document.querySelector("#add-column");
const addRows = document.querySelector("#add-row");
const removeColumn = document.querySelector("#remove-column");
const removeRow = document.querySelector("#remove-row");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const span = document.querySelector("span");
const fillAll = document.querySelector("#fill-all");
const fillAllUncolored = document.querySelector("#fill-all-uncolored");
const clearAll = document.querySelector("#clear-all");
const modeBtn = document.querySelector(".mode-button")
addColumn.addEventListener("click", function () {
    const allColumns = document.querySelectorAll("tr");
    for (let i = 0; i < allColumns.length; i++) {
        let newCol = document.createElement("td");
        newCol.className = "cube";
        allColumns[i].appendChild(newCol);
    }
})

addRows.addEventListener("click", function () {
    const countCol = document.querySelector("tr"); // Count for how many coilumns
    const newRow = document.createElement("tr");
    newRow.className = "cube";
    tbody[0].appendChild(newRow);
    for (let i = 0; i < countCol.children.length; i++) {
        let newCell = document.createElement("td");
        newCell.className = "cube";
        newRow.append(newCell);
    }
})

removeColumn.addEventListener("click", function () {
    const allColumns = document.querySelectorAll("tr");
    console.log(allColumns);
    for (let i = 0; i < allColumns.length; i++) {
        allColumns[i].lastElementChild.remove();
    }
})

removeRow.addEventListener("click", function () {
    const firstRow = document.querySelector("tr");
    firstRow.remove();
})

red.addEventListener("click", function () {
    span.innerText = " Red ";
    span.className = "red";
})
blue.addEventListener("click", function () {
    span.innerText = " Blue ";
    span.className = "blue";
})
green.addEventListener("click", function () {
    span.innerText = " Green ";
    span.className = "green";
})

document.querySelector("table").addEventListener("mouseover", function (e) {
    const allCells = document.querySelectorAll("td");
    for (let i = 0; i < allCells.length; i++) {
        
        allCells[i].addEventListener("click", function () {
            allCells[i].className = span.innerText.toLowerCase();
        })
    }
})

fillAll.addEventListener("click", function () {
    const allCells = document.querySelectorAll("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].className = span.innerText.toLowerCase();
    }
})

fillAllUncolored.addEventListener("click", function () {
    const allCells = document.querySelectorAll("td");
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].className !== span.innerText.toLowerCase()) {
            allCells[i].className = span.innerText.toLowerCase();
        }
    }
})

clearAll.addEventListener("click", function () {
    const allCells = document.querySelectorAll("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].className = "cube";
    }
})
