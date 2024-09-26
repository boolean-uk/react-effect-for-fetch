import PropTypes from "prop-types";
import UsersListItem from "./UsersListItem";

function UsersList(props) {
  return (
    <ul className="users-list">
      {props.users.map((user, index) => (
        <UsersListItem user={user} key={index} />
      ))}
    </ul>
  );
}

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array,
};
