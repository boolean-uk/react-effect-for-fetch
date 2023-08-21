import UsersListItem from "./UsersListItem";

export default function UsersList(props) {
  const { users } = props

  return (
    <ul className="users-list">
      {
        users.map((user, index) => 
          <UsersListItem
            user={user}
            key={index}
            /** NOTE: key = {user.id.name + user.id.value} 
             * fails, since some of the objects fetched have sometimes the same id: {name: '', value: null}, thus getting a warning message
             * Warning: Encountered two children with the same key, `null`.
            */
          />
        )
      }
    </ul>
  )
}