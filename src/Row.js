import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Mudal from "./Mudal";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [trailerUrl, setTrailerUrl] = useState("");
	const base_url = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const openModal = () => {
		return setModalIsOpen(true);
	};
	//console.table(movies);

	const customStyles = {
		overlay: {},
		content: {
			display: "flex",
			color: "lightsteelblue",
			width: "50%",
			height: "100%",
			justifyContent: "center",
			justifySelf: "center",
			left: "25%",
			top: "10.5%",
			backgroundColor: "#a8a7a5",
		},
	};

	const handleClick = (movie) => {
		console.log(movie?.target.alt);

		movieTrailer(movie?.target.alt, { id: true })
			.then((url) => {
				//const urlParams = new URLSearchParams(new URL(url).search);
				//setTrailerUrl(urlParams.get("v").toString());
				setTrailerUrl(url);
				console.log(trailerUrl);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="row">
			<h2 className="title">{title}</h2>
			{modalIsOpen && (
				<Mudal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
					style={customStyles}
					trailerUrl={trailerUrl}
				/>
			)}

			<div className="row_posters">
				{movies.map((movie) => (
					//console.log(movie),
					<img
						style={{ borderRadius: 10 }}
						onClick={(movie) => {
							openModal();
							handleClick(movie);
						}}
						key={movie.id}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.poster_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
