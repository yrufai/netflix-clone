import React from "react";
import Row from "../Row";
import request from "../Api_calls";
import Banner from "../Banner";
import Nav from "../Nav";

function HomeScreen() {
	return (
		<div className="HomeScreen">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={request.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="Trending Now" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetchHororMovies} />
			<Row title="Animation" fetchUrl={request.fetchAnimation} />
			<Row title="crime movies" fetchUrl={request.fetchCrime} />
			<Row title="war" fetchUrl={request.fetchWar} />
			<Row title="History" fetchUrl={request.fetchHistory} />
			<Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
		</div>
	);
}

export default HomeScreen;
