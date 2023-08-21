import UsersListItem from "./UsersListItem";

export default function UsersList(props) {
  const { users } = props

  return (
    <ul className="users-list">
      {
        users && users.map(user => 
          <UsersListItem
            user={user}
            key={user.id.name + user.id.value}
          />
        )
      }
    </ul>
  )
}