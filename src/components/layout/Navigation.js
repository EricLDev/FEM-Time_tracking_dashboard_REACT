import React, { useState } from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import jeremy from "../../images/image-jeremy.png";

const Navigation = () => {
	const [currentLink, setCurrentLink] = useState("");

	let color = {};
	switch (currentLink) {
		case "daily":
			color = { color: "#fff" };
			break;
		case "weekly":
			color = { color: "#fff" };
			break;
		case "monthly":
			color = { color: "#fff" };
			break;
		default:
			color = {};
	}

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
						<NavLink style={currentLink === "daily" ? color : null} to="/FEM-Time_tracking_dashboard_REACT/daily-report" onClick={() => setCurrentLink("daily")}>
							Daily
						</NavLink>
					</li>
					<li>
						<NavLink style={currentLink === "weekly" ? color : null} to="/FEM-Time_tracking_dashboard_REACT/weekly-report" onClick={() => setCurrentLink("weekly")}>
							Weekly
						</NavLink>
					</li>
					<li>
						<NavLink style={currentLink === "monthly" ? color : null} to="/FEM-Time_tracking_dashboard_REACT/monthly-report" onClick={() => setCurrentLink("monthly")}>
							Monthly
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
