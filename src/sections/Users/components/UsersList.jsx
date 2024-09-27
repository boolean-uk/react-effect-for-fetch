import UserListItem from "./UsersListItem";

export default function UserList({ userList }) {
  return (
    <>
      <ul className="users-list">
        {userList.map((user, index) => 
          <UserListItem key={index} user={user}/>
        )}
      </ul>
    </>
  );
}
