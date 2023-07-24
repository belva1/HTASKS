class PostPage {
        constructor() {
            this.renderPage()
            this.posts = []
        }

        renderPage() {
            let htmlPostsBlock = this.renderPostsBlock()
            let postPage = this.postPage
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(function (json) {
                    json.forEach(function (postData) {
                        let post = new Post(postData)
                        htmlPostsBlock.innerHTML += post.htmlPost
                        postPage.posts.push(post)
                    })
                })
        }

        renderPostsBlock() {
            this.htmlPostsBlock = document.createElement("div")
            this.htmlPostsBlock.className = "accordion"
            this.htmlPostsBlock.id = "accordionExample"
            document.body.appendChild(this.htmlPostsBlock)
            return this.htmlPostsBlock
        }
    }

    class Post {
        constructor({userId, id, title, body}) {
            this.userId = userId
            this.title = title
            this.body = body
            this.id = id
            this.htmlPost = this.renderPost()
        }

        // return html element
        renderPost(){

            let accordionItem =


            return `<div class="accordion-item">
                <h2 class="accordion-header" id="post-${this.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#post-title-${this.id}" aria-expanded="true" aria-controls="post-title-${this.id}">
                        ${this.title}
                    </button>
                </h2>
                <div id="post-title-${this.id}" class="accordion-collapse collapse" aria-labelledby="post-${this.id}"
                     data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                       ${this.body}
                    </div>
                </div>
            </div>`
        }
    }