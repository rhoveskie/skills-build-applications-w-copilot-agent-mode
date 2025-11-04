
import React, { useEffect, useState } from 'react';
const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		console.log('Fetching Activities from:', API_URL);
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				const results = Array.isArray(data) ? data : data.results || [];
				setActivities(results);
				console.log('Fetched Activities:', data);
			})
			.catch(err => console.error('Error fetching activities:', err));
	}, []);

	return (
		<div>
			<h2 className="mb-4 text-primary">Activities</h2>
			<div className="table-responsive">
				<table className="table table-striped table-bordered">
					<thead className="table-primary">
						<tr>
							{activities[0] && Object.keys(activities[0]).map((key) => (
								<th key={key}>{key}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{activities.map((activity, idx) => (
							<tr key={activity.id || idx}>
								{activities[0] && Object.keys(activities[0]).map((key) => (
									<td key={key}>{String(activity[key])}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{activities.length === 0 && <div className="alert alert-info">No activities found.</div>}
			</div>
		</div>
	);
}

export default Activities;
