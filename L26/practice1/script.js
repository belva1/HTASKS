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


class PostPage {
    constructor(){
        this.form = new myDiv(settings)
        document.body.appendChild(this.form.mainDiv)
        // arr with class objects
        this.postsArr = []
        // <div class="accordion" id="accordionPanelsStayOpenExample">
        this.postsDiv = document.createElement('div')
        this.postsDiv.className = "accordion"
        this.postsDiv.id = "accordionPanelsStayOpenExample"
        // call a method
        this.createHtml()
        document.body.appendChild(this.postsDiv)
    }

    createHtml () {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    let newPost = new Post(post)
                    this.postsArr.push(newPost)
                    this.postsDiv.appendChild(newPost.postDiv)
                })
            })
        this.form.submitBtn.addEventListener('click', () => {
            let userId = this.form.inputs[0]
            let title = this.form.inputs[1]
            let body = this.form.inputs[2]
            if(userId.value !== '' && title.value !== '' && body.value != ''){
                let bodyData = {
                    'id': this.postsArr.length + 1, // id for the new post
                    'userId': userId.value,
                    'title': title.value,
                    'body': body.value
                }
                // blank values for inputs after submitting
                userId.value = ''
                title.value = ''
                body.value = ''
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(bodyData),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(postData => {
                        let newData = new Post(postData)
                        this.postsArr.push(newData)
                        this.postsDiv.appendChild(newData.postDiv)
                    })
            }
        })
    }
}


class Post {
    constructor({userId, id, title, body}) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
        this.postDiv = this.createHtmlPost()
    }

    createHtmlPost () {
        // <div class="accordion-item">
        let div = document.createElement('div')
        div.className = "accordion-item"
        // <h2 class="accordion-header">
        let postHeader = document.createElement('h2')
        postHeader.className = "accordion-header"
        // <button class="accordion-button" type="button" ...>
        let buttonTitle = document.createElement('button')
        buttonTitle.className = "accordion-button"
        buttonTitle.type = "button"
        buttonTitle.setAttribute('data-bs-toggle', "collapse")
        buttonTitle.setAttribute('data-bs-target', `#panelsStayOpen-collapse${this.id}`)
        buttonTitle.setAttribute('aria-expanded', "true")
        buttonTitle.setAttribute('aria-controls', `panelsStayOpen-collapse${this.id}`)
        // <div>
        //     <h1>${this.title}</h1>
        //     <p>${this.body}</p>
        // </div>
        buttonTitle.innerHTML = `<div><h1>${this.title}</h1><p>${this.body}</p></div>`
        postHeader.appendChild(buttonTitle)

        // for dropdown in the title which contains the body
        let dropdownDiv = document.createElement('div')
        dropdownDiv.className = "accordion-collapse collapse show"
        dropdownDiv.id = `panelsStayOpen-collapse${this.id}`
        let textDiv = document.createElement('div')
        textDiv.clasName = "accordion-body"
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {
                    let newComment = new Comment(comment)
                    textDiv.appendChild(newComment.htmlComment)
                })
            })

        dropdownDiv.appendChild(textDiv)
        div.appendChild(postHeader)
        div.appendChild(dropdownDiv)

        return div
    }
}


class Comment {
    constructor({postId, id, name, email, body}) {
        this.postId = postId
        this.id = id
        this.name = name
        this.email = email
        this.body = body
        this.htmlComment = this.createComment()
    }

    createComment() {
        let commentDiv = document.createElement('div')
        commentDiv.style.textAlign = 'center'
        let header = document.createElement('h2')
        header.innerText = 'Comment'
        let pBody = document.createElement('p')
        pBody.innerText = this.body
        let pEmail = document.createElement('p')
        pEmail.innerText = this.email
        let pName = document.createElement('p')
        pName.innerText = this.name
        commentDiv.appendChild(header)
        commentDiv.appendChild(pBody)
        commentDiv.appendChild(pEmail)
        commentDiv.appendChild(pName)
        return commentDiv
    }
}


class myDiv {
    constructor(settings) {
        this.inputs = []
        this.submitBtn = document.createElement("button")
        this.mainDiv = this.createHtml()
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
        return divContainer
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
        this.submitBtn.addEventListener('click', () => {
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
        this.submitBtn.type = "submit"
        this.submitBtn.className = "btn btn-dark"
        this.submitBtn.innerText = "Submit"
        this.htmlForm.appendChild(this.submitBtn)
    }
}

let newPostPage = new PostPage()