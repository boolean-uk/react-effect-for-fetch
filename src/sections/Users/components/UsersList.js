import UsersListItem from "./UsersListItem";

function ArtList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user) => {
        return <UsersListItem />;
      })}
    </ul>
  );
}

export default ArtList;
