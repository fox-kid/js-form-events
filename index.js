const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.querySelector("form");
const select = document.getElementById("stateSelect");
let state = select.options[select.selectedIndex].value;


// If there is a saved value of state in local storage, it will just set the select value from it;
// I moved it before window.onload because the select would change its state with delay in that case

let savedState = localStorage.getItem("state");
savedState ? select.value = savedState : state;


// Check local storage on window's load/reload and set inputs values
// accordingly if they are not empty

window.onload = () => {
    let titleValue = localStorage.getItem("title");
    let contentValue = localStorage.getItem("content");

    title.value = titleValue;
    content.value = contentValue;
}

// Reset button styles on hover (mouseover & mouseout)

resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.setProperty("background-color", "#5a8947");
    resetBtn.style.setProperty("box-shadow", "0px 2px 8px 2px rgb(72 74 72 / 30%)")
})

resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.setProperty("background-color", "#71a95a")
    resetBtn.style.setProperty("box-shadow", "0px 2px 6px 2px rgb(72 74 72 / 30%)")
})


// Submit button styles on hover (mouseover & mouseout)

submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.setProperty("background-color", "#5a8947");
    submitBtn.style.setProperty("box-shadow", "0px 2px 8px 2px rgb(72 74 72 / 30%)")
})

submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.setProperty("background-color", "#71a95a")
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

submitBtn.addEventListener("click", () => {
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