import React from "react";
import classes from "./Card.module.css";
import work from "../../images/icon-work.svg";
import exercise from "../../images/icon-exercise.svg";
import play from "../../images/icon-play.svg";
import selfcare from "../../images/icon-self-care.svg";
import social from "../../images/icon-social.svg";
import study from "../../images/icon-study.svg";
import ellipsis from "../../images/icon-ellipsis.svg";

const Card = (props) => {
	let icon = {};
	let background = {};

	switch (props.title) {
		case "Work":
			icon = work;
			background = { backgroundColor: "hsl(15, 100%, 70%)", gridArea: "work" };
			break;
		case "Play":
			icon = play;
			background = { backgroundColor: "hsl(195, 74%, 62%)", gridArea: "play" };
			break;
		case "Study":
			icon = study;
			background = { backgroundColor: "hsl(348, 100%, 68%)", gridArea: "study" };
			break;
		case "Exercise":
			icon = exercise;
			background = { backgroundColor: "hsl(145, 58%, 55%)", gridArea: "exercise" };
			break;
		case "Social":
			icon = social;
			background = { backgroundColor: "hsl(264, 64%, 52%)", gridArea: "social" };
			break;
		case "Self Care":
			icon = selfcare;
			background = { backgroundColor: "hsl(43, 84%, 65%)", gridArea: "selfcare" };
			break;
		default:
			icon = null;
	}

	return (
		<div style={background} className={classes.card}>
			<div className={classes.background}>
				<img src={`${icon}`} alt="" />
			</div>
			<div className={classes.reportItem}>
				<div className={classes.title}>
					<p>{props.title}</p>
					<div className={classes.dots}>
						<img src={ellipsis} alt="" />
					</div>
				</div>
				<div className={classes.stats}>
					<p>{props.current}hrs</p>
					<div className={classes.lastWeek}>
						<p>Last week - {props.previous}hrs</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
