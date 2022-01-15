const API_URL = 'http://127.0.0.1:3001';

const getUrl = (url: string): string => `${API_URL.replace(/$\//, '')}/${url.replace(/^\//, '')}`

const fetcher = (url: string) => fetch(getUrl(url)).then((res) => res.json());
const fetcherText = (url: string) => fetch(getUrl(url)).then((res) => res.text());

export {fetcher, fetcherText};
