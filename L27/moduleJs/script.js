const settings = {
    inputs: [
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "number"},
            {'key': "name", value: "userID"},
            {'key': "placeholder", value: "Please enter the user ID..."},
            {'key': "id", value: '1'},
            {'key': "minlength", value: 1},
            {'key': "maxlength", value: 3},
            {'key': "required", value: true},
        ],
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "title"},
            {'key': "placeholder", value: "Please enter the Title..."},
            {'key': "id", value: '2'},
            {'key': "minlength", value: 3},
            {'key': "maxlength", value: 255},
            {'key': "required", value: true},
        ],
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "body"},
            {'key': "placeholder", value: "Please enter the Body..."},
            {'key': "id", value: '3'},
            {'key': "minlength", value: 3},
            {'key': "maxlength", value: 255},
            {'key': "required", value: true},
        ],
    ],
}

const commentSettings = {
    inputs: [
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "name"},
            {'key': "placeholder", value: "Please enter the Name..."},
            {'key': "id", value: '1'},
            {'key': "minlength", value: 3},
            {'key': "maxlength", value: 255},
            {'key': "required", value: true},
        ],
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "email"},
            {'key': "placeholder", value: "Please enter the Email..."},
            {'key': "id", value: '2'},
            {'key': "minlength", value: 3},
            {'key': "maxlength", value: 255},
            {'key': "required", value: true},
        ],
        [
            {'key': "class", value: "form-control"},
            {'key': "type", value: "text"},
            {'key': "name", value: "body"},
            {'key': "placeholder", value: "Please enter the Body..."},
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
        this.numberOfComments = []
        // <div class="accordion" id="accordionPanelsStayOpenExample">
        this.postsDiv = document.createElement('div')
        // call a method
        this.createHtml()
        document.body.appendChild(this.postsDiv)
    }

    createHtml () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET',
            dataType: 'json',
            success: (posts => {
                posts.forEach(post => {
                    let newPost = new Post(post)
                    this.postsArr.push(newPost)
                    this.postsDiv.appendChild(newPost.postDiv)
                    this.numberOfComments += newPost.comments.length // when creating a new post, the comLen ++
                })
            })
        })

        
        this.form.submitBtn.addEventListener('click', () => {
            let userId = this.form.inputs[0]
            let title = this.form.inputs[1]
            let body = this.form.inputs[2]
            if(userId.value !== '' && title.value !== '' && body.value !== ''){
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

                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    method: 'POST',
                    data: JSON.stringify(bodyData),
                    contentType: 'application/json',
                    success: (postData) => {
                        let newData = new Post(postData)
                        this.postsArr.push(newData)
                        this.postsDiv.appendChild(newData.postDiv)
                    }
                })
            }
        })
    }
}


class Post {
    constructor({userId, id, title, body}) {
        this.form = new myDiv(commentSettings)
        this.comments = []
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
        this.postDiv = this.createHtmlPost()
        this.postDiv.style.marginBottom = '20px'
        this.postDiv.style.borderRadius = '20px'
    }


    createHtmlPost () {
        let div = document.createElement('div')
        div.style.textAlign = 'center'
        div.style.backgroundColor = '#2d3436'
        div.style.color = 'white'
        let divPost = document.createElement('div')
        let headerPost = document.createElement('h1')
        headerPost.innerText = 'Post'
        divPost.style.textAlign = 'center'
        let pTitle = document.createElement('p')
        pTitle.innerText = this.title
        pTitle.style.fontWeight = '700'
        pTitle.style.fontSize = '22px'
        let pBody = document.createElement('p')
        pBody.innerText = this.body
        pBody.style.fontSize = '18px'
        div.appendChild(headerPost)
        divPost.appendChild(pTitle)
        divPost.appendChild(pBody)

        let divButtons = document.createElement('div')


        let changeButton = document.createElement('button')
        changeButton.innerText = 'Change'
        changeButton.className = 'btn btn-secondary'
        changeButton.style.marginRight = '10px'

        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.className = 'btn btn-secondary'

        let addCommentDiv = document.createElement('div')
        addCommentDiv.style.marginBottom = '10px'
        addCommentDiv.id = `addCommentDiv${this.id}`

        let addCommentButton = document.createElement('button')
        addCommentButton.id = `addCommentButton${this.id}`
        addCommentButton.className = 'btn btn-secondary'
        addCommentButton.style.marginLeft = '10px'
        addCommentButton.innerText = 'Add comment'
        addCommentDiv.appendChild(addCommentButton)

        divButtons.appendChild(changeButton)
        divButtons.appendChild(deleteButton)
        divButtons.style.marginBottom = '20px'
        divPost.appendChild(divButtons)

        addCommentButton.addEventListener('click', () => {
            addCommentDiv.innerText = ''
            addCommentDiv.appendChild(this.form.mainDiv)
            let cancelBtn = document.createElement('button');
            cancelBtn.className = 'btn btn-secondary';
            cancelBtn.innerText = 'Cancel';
            cancelBtn.style.marginLeft = '10px';
            cancelBtn.style.marginBottom = '20px';
            addCommentDiv.appendChild(cancelBtn)
            let name = this.form.inputs[0]
            let email = this.form.inputs[1]
            let body = this.form.inputs[2]
            cancelBtn.addEventListener('click', () => {
                addCommentDiv.innerText = ''
                addCommentDiv.appendChild(addCommentButton)
                name.value = ''
                email.value = ''
                body.value = ''
            })
            this.form.submitBtn.addEventListener('click', () =>{    
                if(name.value !== '' && email.value !== '' && body.value !== ''){
                    let newCommentData = {
                        postId: this.id,
                        id: 501,
                        name: name.value,
                        email: email.value,
                        body: body.value,
                    }
                    name.value = ''
                    email.value = ''
                    body.value = ''
                    $.ajax({
                        url: `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`,
                        method: 'POST',
                        data: JSON.stringify(newCommentData),
                        contentType: 'application/json',
                        success: (commentData) => {
                            let newComment = new Comment(commentData)
                            divComment.appendChild(newComment.htmlComment)
                        }
                    })
                    addCommentDiv.innerText = ''
                    addCommentDiv.appendChild(addCommentButton)
                }
            })
        })

        changeButton.addEventListener('click', () => {
            let inputTitle = document.createElement('input')
            inputTitle.className = 'form-control'
            inputTitle.style.marginBottom = '6px'
            inputTitle.value = pTitle.textContent
            inputTitle.placeholder = 'Enter new title...'

            let inputBody = document.createElement('input')
            inputBody.className = 'form-control'
            inputBody.style.marginBottom = '6px'
            inputBody.value = pBody.textContent
            inputBody.placeholder = 'Enter new body...'

            let saveButton = document.createElement('button')
            saveButton.className = 'btn btn-secondary'
            saveButton.style.marginBottom = '20px'
            saveButton.innerText = 'Save'

            let cancelButton = document.createElement('button');
            cancelButton.className = 'btn btn-secondary';
            cancelButton.innerText = 'Cancel';
            cancelButton.style.marginLeft = '10px';
            cancelButton.style.marginBottom = '20px';

            let titleBeforeChange = pTitle.innerText
            let bodyBeforeChange = pBody.innerText
            cancelButton.addEventListener('click', () => {
                pTitle.innerText = titleBeforeChange
                pBody.innerText = bodyBeforeChange

                divPost.innerText = ''
                divPost.appendChild(pTitle)
                divPost.appendChild(pBody)
                divButtons.appendChild(changeButton)
                divButtons.appendChild(deleteButton)
                divPost.appendChild(divButtons)
            })

            divPost.innerText = ''
            divPost.appendChild(inputTitle)
            divPost.appendChild(inputBody)
            divPost.appendChild(saveButton)
            divPost.appendChild(cancelButton)

            saveButton.addEventListener('click', () => {
                pTitle.innerText = inputTitle.value
                pBody.innerText = inputBody.value

                $.ajax({
                    url: `https://jsonplaceholder.typicode.com/posts/${this.id}`,
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    data: JSON.stringify({ title: inputTitle.value, body: inputBody.value }),
                    success: (data) => {
                        this.title = data.title
                        this.body = data.body
                    }
                })

                divPost.innerText = ''
                divPost.appendChild(pTitle)
                divPost.appendChild(pBody)
                divButtons.appendChild(changeButton)
                divButtons.appendChild(deleteButton)
                divPost.appendChild(divButtons)
            })

            divPost.innerText = ''
            divPost.appendChild(inputTitle)
            divPost.appendChild(inputBody)
            divPost.appendChild(saveButton)
            divPost.appendChild(cancelButton)
        })

        deleteButton.addEventListener('click', () => {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/posts/${this.id}`,
                method: 'DELETE',
                success: () => {
                    div.innerText = ''
                }
            })
        })
        

        let divComment = document.createElement('div')
        divComment.id = `divComment${this.id}`
        
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`,
            method: 'GET',
            dataType: 'json',
            success: (comments) => {
                comments.forEach((comment) => {
                    let newComment = new Comment(comment)
                    divComment.appendChild(newComment.htmlComment)
                    this.comments.push(newComment)
                })
            }
        })

        div.appendChild(divPost)
        div.appendChild(addCommentDiv)
        div.appendChild(divComment)

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


        let deleteCommentButton = document.createElement('button')
        deleteCommentButton.innerText = 'Delete Comment'
        deleteCommentButton.className = 'btn btn-dark'
        deleteCommentButton.style.marginTop = '10px';
        deleteCommentButton.style.marginBottom = '20px';
        commentDiv.appendChild(deleteCommentButton);

        deleteCommentButton.addEventListener('click', () => {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/comments/${this.id}`,
                method: 'DELETE',
                success: () => {
                    commentDiv.remove()
                }
            })
        })
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