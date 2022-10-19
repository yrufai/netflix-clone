import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import "./WelcomeScreen.css";

function WelcomeScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="welcomeScreen">
			<div className="welcomeScreen_background">
				<h1 className="welcomeScreen_logo">UCB</h1>
				<button
					className="welcomeScreen_button"
					onClick={() => setSignIn(true)}
				>
					Sign In
				</button>
				<div className="welcomeScreen_gradient"></div>
			</div>
			<div className="welcomeScreen_body">
				{signIn ? (
					<LoginScreen />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more</h1>
						<h2>Watch anywhere. Cancel at any time</h2>
						<h3>
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
