import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "components/layout/Layout";
import DailyReport from "./components/pages/DailyReport";
import WeeklyReport from "./components/pages/WeeklyReport";
import MonthlyReport from "./components/pages/MonthlyReport";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<Navigate replace to="/weekly-report" />}></Route>
					<Route path="/daily-report" element={<DailyReport />}></Route>
					<Route path="/weekly-report" element={<WeeklyReport />}></Route>
					<Route path="/monthly-report" element={<MonthlyReport />}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
