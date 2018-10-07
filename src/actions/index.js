import Axios from 'axios';

const URL = 'http://localhost:3004';

export function artistListAll() {
    const request = Axios.get(`${URL}/artists?_limit=6`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_ALL',
        payload: request
    }
}

export function getArtistList(keywords) {
    const request = Axios.get(`${URL}/artists?q=${keywords}`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS',
        payload: request
    }    
}

export function artistDetail(id) {
    const request = Axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'ARTIST_DETAIL',
        payload: request
    }
}