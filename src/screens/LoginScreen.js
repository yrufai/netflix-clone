import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";
import "./LoginScreen.css";

import SignupScreen from "./SignupScreen";

function LoginScreen() {
	const auth = getAuth(app);
	//const emailRef = useRef(null);
	//const passwordRef = useRef(null);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signup = (e) => {
		e.preventDefault();
		navigate("/subscribe");
	};

	const login = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				console.log(authUser);
				navigate("/");
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="loginScreen">
			<form>
				<h1 className="signin">Sign In</h1>
				<label className="label" htmlFor="Email">
					Email
				</label>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label className="label" htmlFor="password">
					Password
				</label>

				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="button" type="submit" onClick={login}>
					Sign In
				</button>
				<h4 className="h4">
					<span className="signup_gray">
						{" "}
						To create an account click sign Up
					</span>
					<span className="signup_link" onClick={signup}>
						Sign Up now
					</span>
				</h4>
			</form>
		</div>
	);
}

export default LoginScreen;
