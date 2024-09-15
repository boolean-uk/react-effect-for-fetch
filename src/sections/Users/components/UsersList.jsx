import PropTypes from "prop-types";
import UserListItem from "./UsersListItem";
function UserList(props) {
  return (
    <ul className="users-list">
      {props.users.map((user) => {
        return <UserListItem key={user.id} user={user} />;
      })}
    </ul>
  );
}
UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default UserList;
