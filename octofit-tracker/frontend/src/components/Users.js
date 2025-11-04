
import React, { useEffect, useState } from 'react';
const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		console.log('Fetching Users from:', API_URL);
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				const results = Array.isArray(data) ? data : data.results || [];
				setUsers(results);
				console.log('Fetched Users:', data);
			})
			.catch(err => console.error('Error fetching users:', err));
	}, []);

	return (
		<div>
			<h2 className="mb-4 text-primary">Users</h2>
			<div className="table-responsive">
				<table className="table table-striped table-bordered">
					<thead className="table-primary">
						<tr>
							{users[0] && Object.keys(users[0]).map((key) => (
								<th key={key}>{key}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{users.map((user, idx) => (
							<tr key={user.id || idx}>
								{users[0] && Object.keys(users[0]).map((key) => (
									<td key={key}>{String(user[key])}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{users.length === 0 && <div className="alert alert-info">No users found.</div>}
			</div>
		</div>
	);
}

export default Users;
