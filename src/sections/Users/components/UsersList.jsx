import { UserListItem } from "./UsersListItem";
export function UserList (props){

  const { userList } = props;

  return (
    <ul className="users-list">
      {userList.map((user, index) => (
            <UserListItem
              key={index}
              userListItem={user}
            />
          ))}
    </ul>
  );
}