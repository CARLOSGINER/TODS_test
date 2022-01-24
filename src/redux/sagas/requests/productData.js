import axios from 'axios';

export function requestGetData() {
    return axios.get("test.json")
}