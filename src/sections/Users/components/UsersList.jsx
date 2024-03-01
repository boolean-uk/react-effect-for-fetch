import PropTypes from "prop-types";
import UsersListItem from "./UsersListItem";

function UserList({ itemList }) {
  return (
    <ul className="users-list">
      {itemList.map((item, index) => (
        <li key={index}>
          <UsersListItem userData={item} />
        </li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default UserList;
