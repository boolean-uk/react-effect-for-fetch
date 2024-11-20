import UsersListItem from "./UsersListItem";
function UserList(props) {
  return (
    <ul className="users-list">
      {props.userData.map((user, index) => {
        return <UsersListItem user={user} Key={index} />;
      })}
    </ul>
  );
}
export default UserList;
