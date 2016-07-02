import {get, post} from './httpClient'

const baseUrl = 'http://192.168.1.71:5000/api/'

const objToQueryParam = obj => {
    return Object.keys(obj).map(key => {
        var val = obj[key]
        return `${key}=${val}`
    })
    .join('&')
}   

export const searchPlayer = searchObj => {
    const params = objToQueryParam(searchObj);
    const url = `${baseUrl}player?${params}`;
    
    return get(url)
}

export const getPlayerStats = id => {
    const url = `${baseUrl}stats/${id}`;

    return get(url);
}