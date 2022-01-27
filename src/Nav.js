import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./passport.jpg";

function Nav() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else setShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	return (
		<div className={`nav ${show && "nav_black"}`}>
			<img
				className="nav_logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
			/>
			<img className="nav_avatar" src={logo} alt="User profile" />
		</div>
	);
}

export default Nav;
