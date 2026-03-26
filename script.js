const input =document.getElementById("input");
const displayBtn =document.getElementById("displayBtn");
const colorBtn =document.getElementById("colorBtn");
const output =document.getElementById("output");
const tableBody =document.getElementById("tableBody");

let count = 0;
let colors = ["lightblue", "lightgreen","lightcoral"];
let colorIndex = 0;

displayBtn.addEventListener("click", function () {
    const text =input.value;

    if (text.trim() === "") {
        alert("入力欄が空です。");
        return;
    }

    output.textContent = text;
    output.classList.toggle("highlight");

    addTable(text);
});

colorBtn.addEventListener("click", function (){
    document.body.style.backgroundColor =colors[colorIndex];
    colorIndex++;
    if(colorIndex >=colors.length) {
        colorIndex = 0;
    }
});

function addTable(text) {
    count++;

    if (tableBody.children.length >= 3) {
        tableBody.removeChild(tableBody.firstElementChild);
        count--;
    }

    const tr = document.createElement("tr");
    const tdText = document.createElement("td");
    const tdBtn = document.createElement("td");

    tdText.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";

    delBtn.addEventListener("click", function () {
        tr.remove();
        count--;

        if (count < 3) {
        displayBtn.style.display = "inline";
        }
    });

    tdBtn.appendChild(delBtn);
    tr.appendChild(tdText);
    tr.appendChild(tdBtn);
    tableBody.appendChild(tr);

    if (count >= 3) {
    displayBtn.style.display = "none";
    }
}

for (let i = 1; i <=5; i++) {
    console.log(i);
}