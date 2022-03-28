import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import jeremy from "../../images/image-jeremy.png";

const Navigation = () => {
	return (
		<div className={classes.navigation}>
			<header>
				<img src={jeremy} alt="" />
				<div className={classes.headerTitle}>
					<p>Report for</p>
					<p>Jeremy Robson</p>
				</div>
			</header>
			<nav>
				<ul>
					<li>
						<Link to="/">Daily</Link>
					</li>
					<li>
						<Link to="/weekly-report">Weekly</Link>
					</li>
					<li>
						<Link to="/monthly-report">Monthly</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
