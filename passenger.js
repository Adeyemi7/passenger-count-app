let countEl = document.getElementById("count-el");

let saveEl = document.getElementById('saved-el');

let totalEL = document.getElementById("total-el");

let incrementBtn = document.getElementById("increment-btn")

let savedBtn = document.getElementById('saved-btn');

let clearBtn = document.getElementById('clear-btn')

let count = 0;

let total = 0;

incrementBtn.addEventListener("click", function() {
    count++
    countEl.textContent = count
});

savedBtn.addEventListener("click", function(){
    total+= count
    totalEL.textContent = `${total}`
    saveEl.textContent+= `${count} - `
    count = 0
    countEl.textContent = count
})

clearBtn.addEventListener("click", function(){
    count = 0;
    total = 0;
    countEl.textContent = count;
    totalEL.textContent = `${total}`;
    saveEl.textContent = "";
})