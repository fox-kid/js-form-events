const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.querySelector("form");
const select = document.getElementById("stateSelect");
let state = select.options[select.selectedIndex].value;


// Check local storage on window's load/reload and set inputs values
// accordingly if they are not empty

window.onload = () => {
    let titleValue = localStorage.getItem("title");
    let contentValue = localStorage.getItem("content");
    let stateValue = localStorage.getItem("state", state);

    title.value = titleValue;
    content.value = contentValue;
    state = stateValue; // TODO
}

// Reset button styles on hover (mouseover & mouseout)

resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.setProperty("background-color", "#f8efef");
    resetBtn.style.setProperty("box-shadow", "0px 2px 8px 2px rgb(72 74 72 / 30%)")
})

resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.setProperty("background-color", "#ffffff")
    resetBtn.style.setProperty("box-shadow", "0px 2px 6px 2px rgb(72 74 72 / 30%)")
})


// Submit button styles on hover (mouseover & mouseout)

submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.setProperty("background-color", "rgb(27 167 27)");
    submitBtn.style.setProperty("box-shadow", "0px 2px 8px 2px rgb(72 74 72 / 30%)")
})

submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.setProperty("background-color", "rgb(30, 188, 30)")
    submitBtn.style.setProperty("box-shadow", "0px 2px 6px 2px rgb(72 74 72 / 30%)")
})


// Save input, textarea and select values in local storage on key up and click

title.addEventListener("keyup", () => {
    localStorage.setItem("title", title.value)
})

content.addEventListener("keyup", () => {
    localStorage.setItem("content", content.value)
})

select.addEventListener("click", () => {
    state = select.options[select.selectedIndex].value;
    localStorage.setItem("state", state);
})


// Reset & Submit button clearing forms and local storage on click
// And Submit button alerting the inputs values

resetBtn.addEventListener("click", () => {
    title.style.setProperty("text-transform", "none");
    clearLocalStorage();
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alert(`Title: ${title.value} \nContent: ${content.value} \nState: ${state}`);
    clearForm();
    clearLocalStorage();
})


// Functions to clear form and local storafe

function clearForm() {
    title.value = "";
    content.value = "";
    select.selectedIndex = 0; 
}

function clearLocalStorage() {
    // let itemsTorRemove = ["title", "content", "state"];
    // itemsTorRemove.forEach(i => localStorage.removeItem(i))
    localStorage.clear();
}