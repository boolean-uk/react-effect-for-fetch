import UsersListItem from "./UsersListItem";

function UsersList(props) {
    return (
      <ul className="users-list">
        {props.users.map((user, i) =>
          <UsersListItem key={i} user={user}/>
        )}
      </ul>
  )
}

export default UsersList