import API_KEY from "./api_key";

const request = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHororMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
	fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
};

export default request;
