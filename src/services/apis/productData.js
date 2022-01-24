import axios from 'axios';

const getProductData = async() => {
    const response = await axios.get("test.json")
    console.log('from getProductData api: ',response)
    return response.data
}   

export {getProductData} 