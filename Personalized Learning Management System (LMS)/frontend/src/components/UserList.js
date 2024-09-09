import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <ul>
            {users.map(user => (
                <li key={user._id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
