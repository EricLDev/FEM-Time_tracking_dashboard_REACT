import React from "react";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return (
		<div className={classes.layout}>
			<Navigation />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
