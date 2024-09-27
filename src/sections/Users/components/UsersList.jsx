import UsersListItem from "./UsersListItem";
function UsersList({ userData }) {
  return (
    <ul className="users-list">
      {userData && userData.length > 0 ? (
        userData.map((user) => <UsersListItem user={user} key={user.id} />)
      ) : (
        <li>No user data available</li>
      )}
    </ul>
  );
}
export default UsersList;
