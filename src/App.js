import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "./firebase";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";

function App() {
	const auth = getAuth(app);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);
	return (
		<div className="App">
			<Router>
				{!user ? (
					<WelcomeScreen />
				) : (
					<Routes>
						<Route exact path="/" element={<HomeScreen />} />
						<Route exact path="/login" element={<LoginScreen />} />
						<Route exact path="/profile" element={<ProfileScreen />} />
						<Route exact path="/signup" element={<SignupScreen />} />
						<Route exact path="/welcome" element={<WelcomeScreen />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
