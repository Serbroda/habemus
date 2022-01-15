const API_URL = 'http://127.0.0.1:3001';

const fetcher = async (url: string) => {
    fetch('http://127.0.0.1:3001' + url).then(async res => await res.text())
}

export default fetcher;
