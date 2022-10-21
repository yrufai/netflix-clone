import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subscribe.css";

function Subscribe() {
	const navigate = useNavigate();
	const signup = (e) => {
		e.preventDefault();
		navigate("/signup");
	};
	return (
		<div className="subscribe">
			<h1>Choose Your Plan</h1>
			<div className="cards_group">
				<div className="cards">
					<h1>chale (no ads)</h1>
					<h2>ghc 20/ month</h2>
					<p>
						Access live sports with ESPN+, endless, ad-free entertainment with
						Disney+, and award-winning Hulu Originals with Hulu (No Ads).
					</p>
					<button onClick={signup} type="button">
						subscribe
					</button>
				</div>
				<div className="cards">
					<h1>chale (with Ads)</h1>
					<h2>ghc 15/ month</h2>
					<p>
						Access live sports with ESPN+, endless, ad-free entertainment with
						Disney+, and award-winning Hulu Originals with Hulu (No Ads).
					</p>
					<button onClick={signup} type="button">
						subscribe
					</button>
				</div>
				<div className="cards">
					<h1>chale (discount)</h1>
					<h2>ghc 100/ year</h2>
					<p>
						Access live sports with ESPN+, endless, ad-free entertainment with
						Disney+, and award-winning Hulu Originals with Hulu (No Ads).
					</p>
					<button onClick={signup} type="button">
						subscribe
					</button>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;
