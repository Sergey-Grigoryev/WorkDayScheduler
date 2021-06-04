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

// var storedArray = [stored9, stored10, stored11, stored12, stored13, stored14, stored15, stored16, stored17];

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
        eachInput.style.opacity = "50%";
        eachInput.style.backgroundColor = "lightgreen";
    } else {
        eachInput.style.opacity = "100%";
        eachInput.style.backgroundColor = "";
    };

    if (stored) {
        eachInput.setAttribute("value", stored);
        eachInput.style.fontWeight = "999";
        eachInput.style.color = "darkgreen";
    };
};

// Save button function
var saveTask = function(task, time, input) {
    input.setAttribute("value", task);
    input.style.color = "darkgreen";
    input.style.fontWeight = "900";
    localStorage.setItem(time, task);
};
// Delete button funtion
var delTask = function(input, time) {
    input.value = "";
    input.style.fontWeight = "";
    localStorage.removeItem(time);
};

// each Save button eventListeners
btn9Save.addEventListener("click", function() {
    if (input9.value) {
        saveTask(input9.value, "9", input9);
    } else {
        delTask(input9, "9");
    };
});

btn10Save.addEventListener("click", function() {
    if (input10.value) {
        saveTask(input10.value, "10", input10);
    } else {
        delTask(input10, "10");
    };
});

btn11Save.addEventListener("click", function() {
    if (input11.value) {
        saveTask(input11.value, "11", input11);
    } else {
        delTask(input11, "11");
    };
});

btn12Save.addEventListener("click", function() {
    if (input12.value) {
        saveTask(input12.value, "12", input12);
    } else {
        delTask(input12, "12");
    };
});

btn13Save.addEventListener("click", function() {
    if (input13.value) {
        saveTask(input13.value, "13", input13);
    } else {
        delTask(input13, "13");
    };
});

btn14Save.addEventListener("click", function() {
    if (input14.value) {
        saveTask(input14.value, "14", input14);
    } else {
        delTask(input14, "14");
    };
});

btn15Save.addEventListener("click", function() {
    if (input15.value) {
        saveTask(input15.value, "15", input15);
    } else {
        delTask(input15, "15");
    };
});

btn16Save.addEventListener("click", function() {
    if (input16.value) {
        saveTask(input16.value, "16", input16);
    } else {
        delTask(input16, "16");
    };
});

btn17Save.addEventListener("click", function() {
    if (input17.value) {
        saveTask(input17.value, "17", input17);
    } else {
        delTask(input17, "17");
    };
});

// Each Delete button eventListeners
btn9Del.addEventListener("click", function() {
    delTask(input9, "9");
})
btn10Del.addEventListener("click", function() {
    delTask(input10, "10");
})
btn11Del.addEventListener("click", function() {
    delTask(input11, "11");
})
btn12Del.addEventListener("click", function() {
    delTask(input12, "12");
})
btn13Del.addEventListener("click", function() {
    delTask(input13, "13");
})
btn14Del.addEventListener("click", function() {
    delTask(input14, "14");
})
btn15Del.addEventListener("click", function() {
    delTask(input15, "15");
})
btn16Del .addEventListener("click", function() {
    delTask(input16, "16");
})
btn17Del.addEventListener("click", function() {
    delTask(input17, "17");
})
