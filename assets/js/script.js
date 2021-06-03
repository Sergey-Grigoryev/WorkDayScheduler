// Save Buttons
var btn9Save = document.querySelector("#btn9Save");
var btn10Save = document.querySelector("#btn10Save");
var btn11Save = document.querySelector("#btn11Save");
var btn12Save = document.querySelector("#btn12Save");
var btn13Save = document.querySelector("#btn13Save");
var btn14Save = document.querySelector("#btn14Save");
var btn15Save = document.querySelector("#btn15Save");
var btn16Save = document.querySelector("#btn16Save");
var btn17Save = document.querySelector("#btn17Save");
// Delete Buttons
var btn9Del = document.querySelector("#btn9Del");
var btn10Del = document.querySelector("#btn10Del");
var btn11Del = document.querySelector("#btn11Del");
var btn12Del = document.querySelector("#btn12Del");
var btn13Del = document.querySelector("#btn13Del");
var btn14Del = document.querySelector("#btn14Del");
var btn15Del = document.querySelector("#btn15Del");
var btn16Del = document.querySelector("#btn16Del");
var btn17Del = document.querySelector("#btn17Del");
// Form inputs
var input9 = document.querySelector("#input9");
var input10 = document.querySelector("#input10");
var input11 = document.querySelector("#input11");
var input12 = document.querySelector("#input12");
var input13 = document.querySelector("#input13");
var input14 = document.querySelector("#input14");
var input15 = document.querySelector("#input15");
var input16 = document.querySelector("#input16");
var input17 = document.querySelector("#input17");

let stored9 = localStorage.getItem("9");
let stored10 = localStorage.getItem("10");
let stored11 = localStorage.getItem("11");
let stored12 = localStorage.getItem("12");
let stored13 = localStorage.getItem("13");
let stored14 = localStorage.getItem("14");
let stored15 = localStorage.getItem("15");
let stored16 = localStorage.getItem("16");
let stored17 = localStorage.getItem("17");

var storedArray = [stored9, stored10, stored11, stored12, stored13, stored14, stored15, stored16, stored17];

// current date and time
document.querySelector("#currentDay").textContent = moment().format('LLLL');
// color code by time
for (i = 0; i < 9; i++) {
    let eachInput;
    let time;
    if (i === 0) {
        time = 9;
        eachInput = input9;
        stored = stored9;
    } else if (i === 1) {
        time = 10;
        eachInput = input10;
        stored = stored10;
    } else if (i === 2) {
        time = 11;
        eachInput = input11;
        stored = stored11;
    } else if (i === 3) {
        time = 12;
        eachInput = input12;
        stored = stored12;
    } else if (i === 4) {
        time = 13;
        eachInput = input13;
        stored = stored13;
    } else if (i === 5) {
        time = 14
        eachInput = input14;
        stored = stored14;
    } else if (i === 6) {
        time = 15;
        eachInput = input15;
        stored = stored15;
    } else if (i === 7) {
        time = 16;
        eachInput = input16;
        stored = stored16;
    } else {
        time = 17;
        eachInput = input17;
        stored = stored17;
    };

    if (time < moment().format('H')) {
        eachInput.style.opacity = "50%";
        eachInput.style.backgroundColor = "lightgray";
    } else if (time > moment().format('H')) {
        eachInput.style.opacity = "100%";
        eachInput.style.backgroundColor = "lightgreen";
    } else {
        eachInput.style.opacity = "100%";
        eachInput.style.backgroundColor = "";
    };

    if (stored) {
        eachInput.setAttribute("value", stored);
        eachInput.style.backgroundColor = "lightgreen";
    };
};

var saveTask = function(task, time) {
    let saveTime;
    if (time === "9") {
        saveTime = input9;
    } else if (time === "10") {
        saveTime = input10;
    } else if (time === "11") {
        saveTime = input11;
    } else if (time === "12") {
        saveTime = input12;
    } else if (time === "13") {
        saveTime = input13;
    } else if (time === "14") {
        saveTime = input14;
    } else if (time === "15") {
        saveTime = input15;
    } else if (time === "16") {
        saveTime = input16;
    } else {
        saveTime = input17;
    };
    
    saveTime.setAttribute("value", task);
    saveTime.style.backgroundColor = "lightgreen";
    localStorage.setItem(time, task);
};

btn9Save.addEventListener("click", function() {
    var task = input9.value;
    var time = "9";
    if (task) {
        saveTask(task, time);
    } else {
        input9.setAttribute("placeholder", "Add task details");
        input9.style.backgroundColor = "";
        localStorage.removeItem("9");
    }
});

btn10Save.addEventListener("click", function() {
    var task = input10.value;
    var time = "10";
    if (task) {
        saveTask(task, time);
    } else {
        input10.setAttribute("placeholder", "Add task details");
        input10.style.backgroundColor = "";
        localStorage.removeItem("10");
    }
});


