import Card from "components/ui/Card";
import React, { useEffect, useState } from "react";

const WeeklyReport = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		await fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getData();
	}, []);

	return <div>{data && data.length > 0 && data.map((item) => <Card key={item.title} title={item.title} current={item.timeframes.weekly.current} previous={item.timeframes.weekly.previous} />)}</div>;
};

export default WeeklyReport;
