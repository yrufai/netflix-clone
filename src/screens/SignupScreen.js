import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
	const auth = getAuth(app);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const navigate = useNavigate();

	const register = () => {
		navigate("/signup");
	};
	const goHome = () => {
		navigate("/welcome");
	};
	const login = () => {
		navigate("/login");
	};

	const signup = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				// Signed in
			})
			.catch((error) => {
				const errorCode = error.code;
				//const errorMessage = error.message;
				console.log(errorCode);
			});
	};

	return (
		<div className="signupScreen">
			<div className="signupScreen_background">
				<div className="navs">
					<h1 className="signup_logo" onClick={goHome}>
						CHALE
					</h1>
					<div className="buttons">
						<button className="signup_button_1" onClick={login}>
							Sign In
						</button>
						<button className="signup_button_2" onClick={register}>
							Register
						</button>
					</div>
				</div>
				<div className="signup_gradient"></div>
			</div>
			<div className="card">
				<form onSubmit={signup}>
					<h1 className="create">Create an Account</h1>
					<label className="label_name" htmlFor="firstName">
						First Name
					</label>
					<input
						className="bio"
						type={"text"}
						name="firstName"
						placeholder="Elrufai"
						required
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label className="label_name">Last Name</label>

					<input
						className="bio"
						type={"text"}
						name="lastName"
						placeholder="Peterson"
						required
						onChange={(e) => setLastName(e.target.value)}
					/>
					<label className="label_name" htmlFor="email">
						Email
					</label>

					<input
						className="bio"
						type={"email"}
						name="email"
						placeholder="yrufai23@gmail.com"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label className="label_name" htmlFor="password">
						Password
					</label>

					<input
						className="bio"
						type={"password"}
						name="password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={signup} className="button" type="button">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignupScreen;
