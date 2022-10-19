import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav";
import { selectUser } from "../userSlice";
import { getAuth } from "firebase/auth";
import app from "../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
	const auth = getAuth(app);
	const user = useSelector(selectUser);
	return (
		<div className="profile">
			<Nav />
			<div className="profile_body">
				<div className="first">
					<img
						className="
					image"
						src="https://images.app.goo.gl/s9KEDFw8EZhEhDDo8"
					></img>
					<div className="email">{user.email} </div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
