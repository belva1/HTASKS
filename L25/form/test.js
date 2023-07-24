let divContainer = document.createElement('div')
divContainer.className = 'container'

let div = document.createElement('div')
div.style.textAlign = 'center'
div.style.fontSize = '150%'

let form = document.createElement('div')
form.className = 'form'
//form.action = 'https://jsonplaceholder.typicode.com/posts'
//form.method = 'post'

let header = document.createElement('h1')
header.innerText = 'INPUTS'

let div1 = document.createElement('div')
div1.className = "input-group flex-nowrap"
div1.style.marginBottom = '4px'

let span1 = document.createElement('span')
span1.className = "input-group-text"
span1.innerText = String.fromCharCode(10064)

let inp1 = document.createElement('input')
inp1.type = "number"
inp1.className = "form-control"
inp1.id = '1'
inp1.name = "userID"
inp1.placeholder = "Please enter the user ID"

let div2 = document.createElement('div')
div2.className = "input-group flex-nowrap"
div2.style.marginBottom = '4px'

let span2 = document.createElement('span')
span2.className = "input-group-text"
span2.innerText = String.fromCharCode(10064)

let inp2 = document.createElement('input')
inp2.type = "text"
inp2.className = "form-control"
inp2.id = '2'
inp2.name = "title"
inp2.placeholder = "Please enter the Title"

let div3 = document.createElement('div')
div3.className = "input-group flex-nowrap"
div3.style.marginBottom = '4px'

let span3 = document.createElement('span')
span3.className = "input-group-text"
span3.innerText = String.fromCharCode(10064)

let inp3 = document.createElement('input')
inp3.type = "text"
inp3.className = "form-control"
inp3.id = '3'
inp3.name = "body"
inp3.placeholder = "Please enter the Body"

let button = document.createElement('button')
button.type = "submit"
button.className = "btn btn-dark"
button.innerText = 'Submit'

div1.appendChild(span1)
div1.appendChild(inp1)

div2.appendChild(span2)
div2.appendChild(inp2)

div3.appendChild(span3)
div3.appendChild(inp3)

form.appendChild(header)
form.appendChild(div1)
form.appendChild(div2)
form.appendChild(div3)
form.appendChild(button)

div.appendChild(form)
divContainer.appendChild(div)

document.body.appendChild(divContainer)





