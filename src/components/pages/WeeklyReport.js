import Card from "components/ui/Card";
import React from "react";

const WeeklyReport = (props) => {
	const data = props.data;

	return <>{data && data.length > 0 && data.map((item) => <Card key={item.title} title={item.title} current={item.timeframes.weekly.current} previous={item.timeframes.weekly.previous} />)}</>;
};

export default WeeklyReport;
