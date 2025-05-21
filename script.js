const cherry = document.getElementById("cherry")
const scoop1 = document.getElementById("scoop1")
const scoop2 = document.getElementById("scoop2")
const scoop3 = document.getElementById("scoop3")
const flavour1 = document.getElementById("scoop-one-btn")
const flavour2 = document.getElementById("scoop-two-btn")
const flavour3 = document.getElementById("scoop-three-btn")
const toppings = document.getElementById("toppings")
const serve = document.getElementById("serve")
const bill = document.getElementById("bill")
const template = document.getElementById("template")
const icon = document.getElementById("icon")
function firstFlavour() {
    let flavour = flavour1.value
    switch (flavour) {
        case "chocolate":
            scoop1.style.background = "#65351C"
            break;
        case "strawberry":
            scoop1.style.background = "#f87b90"
            break;
        case "Caramel":
            scoop1.style.background = "#f8cc9d"
            break;
        case "Pistache":
            scoop1.style.background = "#93c572"
            break;
        case "MintChip":
            scoop1.style.background = "#8ee5da"
            break;
        case "blueberry":
            scoop1.style.background = "#2a416f"
            break;
        case "orange":
            scoop1.style.background = "#ff9f00"
            break;
        case "bubblegum":
            scoop1.style.background = "#ffc1cc"
            break;
    }
}
flavour1.addEventListener("change", firstFlavour)
function secondFlavour() {
    let flavour = flavour2.value
    switch (flavour) {
        case "chocolate":
            scoop2.style.background = "#65351C"
            break;
        case "strawberry":
            scoop2.style.background = "#f87b90"
            break;
        case "Caramel":
            scoop2.style.background = "#f8cc9d"
            break;
        case "Pistache":
            scoop2.style.background = "#93c572"
            break;
        case "MintChip":
            scoop2.style.background = "#8ee5da"
            break;
        case "blueberry":
            scoop2.style.background = "#2a416f"
            break;
        case "orange":
            scoop2.style.background = "#ff9f00"
            break;
        case "bubblegum":
            scoop2.style.background = "#ffc1cc"
            break;
    }
}
flavour2.addEventListener("change", secondFlavour)
function thirdFlavour() {
    let flavour = flavour3.value
    switch (flavour) {
        case "chocolate":
            scoop3.style.background = "#65351C"
            break;
        case "strawberry":
            scoop3.style.background = "#f87b90"
            break;
        case "Caramel":
            scoop3.style.background = "#f8cc9d"
            break;
        case "Pistache":
            scoop3.style.background = "#93c572"
            break;
        case "MintChip":
            scoop3.style.background = "#8ee5da"
            break;
        case "blueberry":
            scoop3.style.background = "#2a416f"
            break;
        case "orange":
            scoop3.style.background = "#ff9f00"
            break;
        case "bubblegum":
            scoop3.style.background = "#ffc1cc"
            break;
    }
}
flavour3.addEventListener("change", thirdFlavour)
toppings.addEventListener("click", () => {
    cherry.classList.toggle("cherry")
})
serve.addEventListener("click", () => {
    bill.style.opacity = 1
    template.style.opacity = 0.3
    bill.innerHTML = "<h2>Here is your Scoop!<br>Enjoy</h2>" + `<br><br>Your total bill is ₹${Math.floor(Math.random() * (150 - 50 + 1) + 50)}`
    func()
})

function func() {
    setTimeout(() => {
        bill.style.opacity = 0
        template.style.opacity = 1
    }, 6000)
}
