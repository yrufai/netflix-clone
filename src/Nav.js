import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./elrufai.png";

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
			<h2 className={`programmer ${show && "programmer_hide "}`}>
				Yakubu Ahmed Elrufai
			</h2>
			<img className="nav_avatar" src={logo} alt="User profile" />
		</div>
	);
}

export default Nav;
