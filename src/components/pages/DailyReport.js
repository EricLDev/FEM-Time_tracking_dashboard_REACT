import Card from "components/ui/Card";
import React from "react";

const DailyReport = (props) => {
	const data = props.data;

	return <>{data && data.length > 0 && data.map((item) => <Card key={item.title} title={item.title} current={item.timeframes.daily.current} previous={item.timeframes.daily.previous} />)}</>;
};

export default DailyReport;
