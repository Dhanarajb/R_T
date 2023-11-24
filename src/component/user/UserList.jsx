import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <User key={user.id} name={user.name} email={user.email} />
                ))}
            </ul>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default UserList;
