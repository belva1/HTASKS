let body = {
    "userId": 1,
    "id": 1,
    "title": "test",
    "body": "test",
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST'
    body: JSON.stringify(body),
    header: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json)
.then(json => console.log(json))



class PostPage {
    constructor () {
        this.renderPage()

    }

    renderPage() {
        let

    }

}

class Post {
    constructor(userId, id, body, title){
        this.userId = userId
        this.id = id
        this.title = title
    }


}