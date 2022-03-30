import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "components/layout/Layout";
import DailyReport from "./components/pages/DailyReport";
import WeeklyReport from "./components/pages/WeeklyReport";
import MonthlyReport from "./components/pages/MonthlyReport";
import "./App.css";

function App() {
	const [data, setData] = useState([]);

	const getData = async () => {
		await fetch("FEM-Time_tracking_dashboard_REACT/data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	};
	console.log(data);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/FEM-Time_tracking_dashboard_REACT" element={<Navigate replace to="/FEM-Time_tracking_dashboard_REACT/weekly-report" />}></Route>
					<Route path="/FEM-Time_tracking_dashboard_REACT/daily-report" element={<DailyReport data={data} />}></Route>
					<Route path="/FEM-Time_tracking_dashboard_REACT/weekly-report" element={<WeeklyReport data={data} />}></Route>
					<Route path="/FEM-Time_tracking_dashboard_REACT/monthly-report" element={<MonthlyReport data={data} />}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
