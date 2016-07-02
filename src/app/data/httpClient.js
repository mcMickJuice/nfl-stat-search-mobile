// const baseUrl = 'http://localhost:5000/api/';

export const get = url => {
    return fetch(url, {
        Accept: 'application/json'
    })
    .then(response => response.json())
}

export const post = (url, payload) => {
    return fetch(url, {
        type: 'POST',
        Accept: 'application/json',
    })
}