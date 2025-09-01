import UsersListItem from "./UsersListItem";


export default function UsersList({usersList}) {

  return (
    <ul className="users-list">
      {usersList.map((user, i) => (
        <UsersListItem user={user} key={i}/>
      ))}
    </ul>
  );
}
