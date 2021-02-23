
const API_KEY = "f1d2748c024dde4cf19a42f2f02bf23c";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US`

}

export default request;