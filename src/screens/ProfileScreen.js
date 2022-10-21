import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav";
import { selectUser } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import "./ProfileScreen.css";
import image from "../user.png";
function ProfileScreen() {
	const auth = getAuth(app);
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	const signout = () => {
		signOut(auth)
			.then(() => {
				navigate("/welcome");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="profile">
			<Nav />
			<div className="profile_body">
				<h1 className="w">who's watching</h1>
				<div className="profile_detail">
					<div className="profiles">
						<img className="image" src={image} />
						<div className="email">{user.email} </div>
					</div>
					<div className="profiles">
						<img className="image" src={image} />
						<div className="email">{user.email} </div>
					</div>
				</div>
				<div className="signOut" onClick={signout}>
					Sign Out
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
