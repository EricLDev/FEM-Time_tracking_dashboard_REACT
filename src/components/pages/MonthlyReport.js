import Card from "components/ui/Card";
import React, { useState, useEffect } from "react";

const MonthlyReport = (props) => {
	const data = props.data;

	return <>{data && data.length > 0 && data.map((item) => <Card key={item.title} title={item.title} current={item.timeframes.monthly.current} previous={item.timeframes.monthly.previous} />)}</>;
};

export default MonthlyReport;
