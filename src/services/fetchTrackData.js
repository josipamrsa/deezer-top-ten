import axios from 'axios';
const BASE_URL = `https://api.allorigins.win/get?url=${encodeURIComponent('http://api.deezer.com/chart')}`;

const fetchData = async () => {
    const response = await axios.get(
        BASE_URL);
    return response.data.contents;
}

export default { fetchData }
