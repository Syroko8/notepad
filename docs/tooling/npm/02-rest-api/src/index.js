const loremIpsum = require("lorem-ipsum").loremIpsum;

const NUMBER_OF_USERS = 1

const BASE_URL = "https://jsonplaceholder.typicode.com"

function log(data) {
    console.log(JSON.stringify(data))
}

function adTitle() {
    return loremIpsum({count: 5, units: "word"})
}

function adDescription() {
    return loremIpsum({count: 1, units: "paragraph"})
}

function fetchBy(request, toResponse) {
    return fetch(request)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(new Error('Network response was not ok.'))
        }).then(toResponse)
}

function createUser(userId) {
    console.log("createUser...")
    const requestBody = function (userId) {
        return {
            "id": userId,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
    }

    const request = new Request(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody(userId))
    });

    const toResponse = (responseData) => {
        log(responseData)
        return Promise.resolve({
            userId: responseData.id
        })
    }

    return fetchBy(request, toResponse)
}

function createArticle(data) {
    console.log("createArticle...")
    const requestBody = function (userId) {
        return {
            id: 1,
            title: adTitle(),
            body: adDescription(),
            userId: userId,
        }
    }

    const request = new Request(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody(data.userId))
    });

    const toResponse = (responseData) => {
        log(responseData)
        return Promise.resolve({
            postId: responseData.id,
            userId: data.userId
        })
    }

    return fetchBy(request, toResponse)
}

function createComment(data) {
    console.log("createComment...")
    const requestBody = function (userId, postId) {
        return     {
            "postId": postId,
            "id": userId,
            "name": adTitle(),
            "email": "any@gmail.com",
            "body": adDescription()
        }
    }

    const request = new Request(`${BASE_URL}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody(data.userId, data.postId))
    });

    function toResponse(responseData) {
        log(responseData)
        return Promise.resolve({
            commentId: responseData.id,
            postId: data.postId,
            userId: data.userId
        })
    }

    return fetchBy(request, toResponse)
}

function main() {
    [...Array(NUMBER_OF_USERS)].map(
        (x, i) => {
            createUser(++i)
                .then(createArticle)
                .then(createComment)
                .then(log)
                .catch(console.error)
        }
    )
}

main()
