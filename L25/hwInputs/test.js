const settings = {
    inputs: [
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "number"},
            {'key': "name", value: "userID"},
            {'key': "placeholder", value: "Please enter the user ID"},
            {'key': "id", value: '1'},
            {'key': "minlength", value: 1},
            {'key': "maxlength", value: 3},
            {'key': "required", value: true},
        ],
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "title"},
            {'key': "placeholder", value: "Please enter the Title"},
            {'key': "id", value: '2'},
            {'key': "minlength", value: 3},
            {'key': "maxlength", value: 255},
            {'key': "required", value: true},
        ],
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "body"},
            {'key': "placeholder", value: "Please enter the Body"},
            {'key': "id", value: '3'},
            {'key': "minlength", value: 3},
            {'key': "maxlength", value: 255},
            {'key': "required", value: true},
        ],
    ],
}

class myDiv {
    constructor(settings) {
        this.inputs = []
        this.btn = document.createElement("button")
        this.createHtml()
        settings.inputs.forEach(inputParams => this.addInput(inputParams))
        this.addBtn()
    }

    createHtml() {
        this.htmlForm = document.createElement("div")
        this.htmlForm.className = 'form'

        let header = document.createElement('h1')
        header.innerText = 'INPUTS'
        this.htmlForm.appendChild(header)

        let divContainer = document.createElement("div")
        divContainer.className = "container"

        let div = document.createElement("div")
        div.style.textAlign = 'center'
        div.style.fontSize = '150%'
        div.appendChild(this.htmlForm)
        divContainer.appendChild(div)
        document.body.appendChild(divContainer)
    }

    addInput(params) {
        let inputDiv = document.createElement('div')
        inputDiv.className = "input-group flex-nowrap"
        inputDiv.style.marginBottom = '4px'

        let span = document.createElement('span')
        span.className = "input-group-text"
        span.innerText = String.fromCharCode(10064)

        let input = document.createElement("input")
        params.map(item => {
            input.setAttribute(item.key, item.value)
        })
        this.inputs.push(input)

        let p = document.createElement('p')
        p.style.marginLeft = '17px'
        p.style.marginTop = '15px'
        input.addEventListener('focus', (event) => {
          if (input.required && input.value === '') {
              p.innerText = `${input.name} can not be empty`
            } else {
              p.innerText = ''
          }
        })
        input.addEventListener('change', (event) => {
            if (input.required && input.value === '') {
                p.innerText = `${input.name} can not be empty`
              } else {
                p.innerText = ''
            }
          })
        this.btn.addEventListener('click', () => {
            if (input.required && input.value === '') {
                alert(`${input.name} can not be empty`)
            }
        })

        inputDiv.appendChild(span)
        inputDiv.appendChild(input)
        this.htmlForm.appendChild(inputDiv)
        this.htmlForm.appendChild(p)
    }

    addBtn() {
        this.btn.type = "submit"
        this.btn.className = "btn btn-dark"
        this.btn.innerText = "Submit"
        this.htmlForm.appendChild(this.btn)
    }
}

let form = new myDiv(settings)