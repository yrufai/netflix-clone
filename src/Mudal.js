import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
//import "./Mudal.css";

function Mudal({ isOpen, onRequestClose, style, trailerUrl }) {
	const opts = {
		width: "795",
		height: "60%",
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div className="mudal">
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				style={style}
				trailerUrl={trailerUrl}
			>
				<YouTube videoId={trailerUrl} opts={opts} />
			</Modal>
		</div>
	);
}

export default Mudal;
