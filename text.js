let ticket = document.getElementById('ticket')
let disapp = document.getElementById('disapper')
function displaynone() {
    disapp.style.display = 'none'
    appaer.style.display = "block"
    show()
}
function back1() {
    disapp.style.display = 'block'
    appaer.style.display = "none"
    show()
}
function show() {
    sow.innerHTML = ""
}
let checkboxes = document.querySelectorAll('.checkbox')
let screen = document.querySelector('.selct')
function selectall() {  
    checkboxes.forEach(Element => {
        Element.checked = true
    });    

    screen.innerHTML = `Selected Tickets (4)`
}

function deleteall() {
    checkboxes.forEach(Element => {
        Element.checked = false
    }); 
    screen.innerHTML = `Selected Tickets`
}


function continu() {
    appaer.style.display = "none"
    twoaapaer.style.display = 'block'
    show()
}

function back2() {
    appaer.style.display = "block"
    twoaapaer.style.display = 'none'
    show()
}
