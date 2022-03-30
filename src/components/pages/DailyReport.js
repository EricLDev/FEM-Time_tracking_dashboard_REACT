import Card from "components/ui/Card";
import React, { useState, useEffect } from "react";

const DailyReport = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		await fetch("./data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data = JSON.stringify(data);
				setData(data);
			})
			.catch((error) => console.log(error));
	};
	console.log(data);

	useEffect(() => {
		getData();
	}, []);

	return <>{data && data.length > 0 && data.map((item) => <Card key={item.title} title={item.title} current={item.timeframes.daily.current} previous={item.timeframes.daily.previous} />)}</>;
};

export default DailyReport;
