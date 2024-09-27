import UsersListItem from "./UsersListItem";

function UsersList({ data }) {
  return (
    <ul className="users-list">
      {data.map((element, ind) => {
        return <UsersListItem key={ind} data={element} />;
      })}
    </ul>
  );
}

export default UsersList;
