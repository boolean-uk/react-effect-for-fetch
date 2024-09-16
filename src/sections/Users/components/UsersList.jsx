import UsersListItem from "./UsersListItem";

function UsersList({ usersList }) {
  return (
    <ul className="users-list">
      {usersList.map((item, index) => {
        return <UsersListItem key={index} user={item} />;
      })}
    </ul>
  );
}

export default UsersList;