import UsersListItem from "./UsersListItem";

function UsersList({ data }) {
  return (
    <ul className="users-list">
      {data.map((item, index) => (
        <UsersListItem 
            key={index} 
            item={item} />
      ))}
    </ul>
  );
}

export default UsersList;
