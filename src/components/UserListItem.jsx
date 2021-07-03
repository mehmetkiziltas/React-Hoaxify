import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImageWithDefault from './ProfileImageWithDefault';

const UserListItem = (props) => {

    

    const { user } = props;
    const { username, displayName, image } = user;
    return (
        <Link to={`/user/${username}`}
            className="list-group-item list-group-item-action"
            key={username}>
            <ProfileImageWithDefault
                className="rounded-circle"
                width="32"
                height="32"
                image={image}
                alt={`${username} profile`} />
            <span className="pl-3">
                {displayName} @
                {username}
            </span>
        </Link>
    );
};

export default UserListItem;
