
import React, { useEffect, useState } from 'react';
const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
	const [leaderboard, setLeaderboard] = useState([]);

	useEffect(() => {
		console.log('Fetching Leaderboard from:', API_URL);
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				const results = Array.isArray(data) ? data : data.results || [];
				setLeaderboard(results);
				console.log('Fetched Leaderboard:', data);
			})
			.catch(err => console.error('Error fetching leaderboard:', err));
	}, []);

	return (
		<div>
			<h2 className="mb-4 text-primary">Leaderboard</h2>
			<div className="table-responsive">
				<table className="table table-striped table-bordered">
					<thead className="table-primary">
						<tr>
							{leaderboard[0] && Object.keys(leaderboard[0]).map((key) => (
								<th key={key}>{key}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{leaderboard.map((entry, idx) => (
							<tr key={entry.id || idx}>
								{leaderboard[0] && Object.keys(leaderboard[0]).map((key) => (
									<td key={key}>{String(entry[key])}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{leaderboard.length === 0 && <div className="alert alert-info">No leaderboard data found.</div>}
			</div>
		</div>
	);
}

export default Leaderboard;
