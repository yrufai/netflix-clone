import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import "./WelcomeScreen.css";

function WelcomeScreen() {
	const [toSignIn, setSignIn] = useState(false);
	const user = useSelector(selectUser);
	const [gotoSignup, setgotoSignup] = useState(false);

	const navigate = useNavigate();
	if (gotoSignup == true) {
		return <Navigate to={"/subscribe"} />;
	}
	const register = () => {
		navigate("/subscribe");
	};
	const goHome = () => {
		navigate("/welcome");
	};
	return (
		<div className="welcomeScreen">
			<div className="welcomeScreen_background">
				<div className="navs">
					<h1 className="welcomeScreen_logo" onClick={goHome}>
						CHALE
					</h1>
					<div className="buttons">
						<button className="welc_button_1" onClick={() => setSignIn(true)}>
							Sign In
						</button>
						<button
							className="welc_button_2"
							onClick={() => setgotoSignup(true)}
						>
							Register
						</button>
					</div>
				</div>
				<div className="welcomeScreen_gradient"></div>
			</div>
			<div className="welcomeScreen_body">
				{toSignIn ? (
					<LoginScreen />
				) : (
					<>
						<h1 className="title">Unlimited films, TV programmes and more</h1>
						<h2 className="title">Watch anywhere. Cancel at any time</h2>
						<h3 className="title">
							{" "}
							Ready to watch? Enter your email to create or restart you
							membership
						</h3>
						<div className="welcomeScreen_input">
							<form action="">
								<input type="email" placeholder="Email" />
								<button
									onClick={() => setSignIn(true)}
									className="welcomeScreen_getStarted"
								>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default WelcomeScreen;
