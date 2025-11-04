
import React, { useEffect, useState } from 'react';
const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		console.log('Fetching Workouts from:', API_URL);
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				const results = Array.isArray(data) ? data : data.results || [];
				setWorkouts(results);
				console.log('Fetched Workouts:', data);
			})
			.catch(err => console.error('Error fetching workouts:', err));
	}, []);

	return (
		<div>
			<h2 className="mb-4 text-primary">Workouts</h2>
			<div className="table-responsive">
				<table className="table table-striped table-bordered">
					<thead className="table-primary">
						<tr>
							{workouts[0] && Object.keys(workouts[0]).map((key) => (
								<th key={key}>{key}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{workouts.map((workout, idx) => (
							<tr key={workout.id || idx}>
								{workouts[0] && Object.keys(workouts[0]).map((key) => (
									<td key={key}>{String(workout[key])}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{workouts.length === 0 && <div className="alert alert-info">No workouts found.</div>}
			</div>
		</div>
	);
}

export default Workouts;
