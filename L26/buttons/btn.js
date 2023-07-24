let div = document.createElement('div')

let p = document.createElement('p')
p.innerText = 'Hello'

let changeBtn = document.createElement('button')
changeBtn.innerText = 'Change'

let deleteBtn = document.createElement('button')
deleteBtn.innerText = 'Delete'

div.appendChild(p)
div.appendChild(changeBtn)
div.appendChild(deleteBtn)

document.body.appendChild(div)

changeBtn.addEventListener('click', () => {
    let input = document.createElement('input')
    input.value = p.textContent
    input.placeholder = 'Enter something'
    div.innerText = ''
    div.appendChild(input)
    let saveBtn = document.createElement('button')
    saveBtn.innerText = 'Save'
    div.appendChild(saveBtn)
    saveBtn.addEventListener('click', () => {
        p.innerText = input.value
        div.innerText = ''
        div.appendChild(p)
        div.appendChild(changeBtn)
        div.appendChild(deleteBtn)
    })
})


deleteBtn.addEventListener('click', () => {
    div.innerText = ''
    let resetBtn = document.createElement('button')
    resetBtn.innerText = 'Reset'
    div.appendChild(resetBtn)
    resetBtn.addEventListener('click', () => {
        div.innerText = ''
        div.appendChild(p)
        div.appendChild(changeBtn)
        div.appendChild(deleteBtn)
    })
})

