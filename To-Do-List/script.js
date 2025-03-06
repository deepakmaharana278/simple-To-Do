const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

 function addTask() {
    if (inputBox.value === '')  {
        alert("You must write something !");
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.append(span);
    }
    inputBox.value = '';
    saveData();
}


btn.addEventListener("click", () => {
    addTask();
});

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

ul.addEventListener("click",(e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.add("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});
let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

let showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
