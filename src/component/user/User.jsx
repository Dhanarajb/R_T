import React from 'react';

const User = ({ name, email }) => {
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;
