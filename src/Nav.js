import React from "react";
import "./Nav.css";

function Nav() {
	return (
		<div className="nav">
			<img
				className="nav_logo"
				src="https://en.wikipedia.org/wiki/File:Netflix_2015_logo.svg"
				alt="Netflix Logo"
			/>
			<img className="nav_avatar" src="./passport.jpg" alt="profile picture" />
		</div>
	);
}

export default Nav;
