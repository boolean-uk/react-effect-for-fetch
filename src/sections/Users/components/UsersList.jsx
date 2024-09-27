import UserListItem from "./UsersListItem";

const UserList = ({ users }) => {
  return (
    <div className="scroll-container">
      <ul className="users-list">
        {users.map((user) => (
          <UserListItem user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
