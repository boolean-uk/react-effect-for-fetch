import PropTypes from 'prop-types';

import UsersListItem from "./UsersListItem";

export default function UsersList(props) {
    const { usersList } = props;

    return (
        <ul className="users-list">
            {usersList.map((usersItem, i) => (
                <UsersListItem usersItem={usersItem} key={i} />
            ))}
        </ul>
    );
}

UsersList.propTypes = {
    usersList: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            profileImage: PropTypes.string,
            favouriteColour: PropTypes.string
        })
    )
}