import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
	const auth = getAuth(app);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signup = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				// Signed in
				const user = authUser.user;
				// ...
				alert(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				//const errorMessage = error.message;
				console.log(errorCode);
			});
	};

	return (
		<div className="signupScreen">
			<form onSubmit={signup}>
				<h1>Create an Account</h1>
				<input
					className="bio"
					type={"email"}
					name="email"
					placeholder="yrufai23@gmail.com"
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="bio"
					type={"password"}
					name="password"
					required
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">button </button>
			</form>
		</div>
	);
}

export default SignupScreen;
