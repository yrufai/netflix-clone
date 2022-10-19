import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import "./LoginScreen.css";
import { render } from "@testing-library/react";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
	const auth = getAuth(app);
	//const emailRef = useRef(null);
	//const passwordRef = useRef(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const register = (e) => {
		e.preventDefault();
		render(<SignupScreen />);
	};

	const login = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="loginScreen">
			<form>
				<h1>Sign In</h1>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" onClick={login}>
					Sign In
				</button>
				<h4>
					<span className="signup_gray"> New to UCB?</span>
					<span className="signup_link" onClick={register}>
						Sign Up now
					</span>
				</h4>
			</form>
		</div>
	);
}

export default LoginScreen;
