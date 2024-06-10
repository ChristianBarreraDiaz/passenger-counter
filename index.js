let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let vagonEl=document.getElementById("vagon-el")

let count = 0 
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    total += count
    saveEl.textContent= total
    let vagon= count + " - "
    vagonEl.textContent += vagon
    count= 0
    countEl.textContent=count
}

function reset(){
    total = 0
    vagon = 0
    saveEl.textContent= total
    vagonEl.textContent=vagon + " - "
}