import UserListItem from "./UsersListItem";

function UserList({ usersData }) {
  return (
    <ul className="user-list">
      {usersData.map((userData, idx) => (
        <UserListItem key={idx} userData={userData} />
      ))}
    </ul>
  );
}
export default UserList;
