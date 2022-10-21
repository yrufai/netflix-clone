import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import "./Nav.css";
import logo from "./elrufai.png";

function Nav() {
	const [show, setShow] = useState(false);
	const [gotoProfile, setGotoProfile] = useState(false);
	const navigate = useNavigate();
	if (gotoProfile == true) {
		return <Navigate to={"/profile"} />;
	}
	return (
		<div className={`nav ${show && "nav_black"}`}>
			<div className="left">
				<h1 onClick={() => navigate("/")} className="nav_logo">
					CHALE
				</h1>
				<div className="links_group">
					<Link className="links">series</Link>
					<Link className="links">comedy</Link>
					<Link className="links">Drama</Link>
					<Link className="links">Horor</Link>
				</div>
			</div>

			<img
				onClick={() => setGotoProfile(true)}
				className="nav_avatar"
				src={logo}
				alt="User profile"
			/>
		</div>
	);
}

export default Nav;
