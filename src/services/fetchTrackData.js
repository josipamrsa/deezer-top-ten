import axios from 'axios';
const BASE_URL = `https://www.whateverorigin.org/get?url=${encodeURIComponent('http://api.deezer.com/chart')}`;

const fetchData = async () => {
    const response = await axios.get(
        BASE_URL);
    return response.data.contents;
}

export default { fetchData }
