
import React, { useEffect, useState } from 'react';
const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		console.log('Fetching Teams from:', API_URL);
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				const results = Array.isArray(data) ? data : data.results || [];
				setTeams(results);
				console.log('Fetched Teams:', data);
			})
			.catch(err => console.error('Error fetching teams:', err));
	}, []);

	return (
		<div>
			<h2 className="mb-4 text-primary">Teams</h2>
			<div className="table-responsive">
				<table className="table table-striped table-bordered">
					<thead className="table-primary">
						<tr>
							{teams[0] && Object.keys(teams[0]).map((key) => (
								<th key={key}>{key}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{teams.map((team, idx) => (
							<tr key={team.id || idx}>
								{teams[0] && Object.keys(teams[0]).map((key) => (
									<td key={key}>{String(team[key])}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{teams.length === 0 && <div className="alert alert-info">No teams found.</div>}
			</div>
		</div>
	);
}

export default Teams;
