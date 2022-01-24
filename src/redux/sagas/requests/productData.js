import axios from 'axios';

export function requestGetData() {
    console.log('ok from requestGetData...')
    return axios.get("test.json")
}