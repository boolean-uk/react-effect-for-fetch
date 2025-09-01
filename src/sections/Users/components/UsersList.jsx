import UsersListItem from "./UsersListItem";

function UsersList(props) {
    const { data } = props

    const capitalize = (name) => {
      return name[0].toUpperCase() + name.slice(1)
    }
    
  return (
    <ul className="users-list">
        {data.map((user, index) => {
          
          const fullName = `${capitalize(user.firstName) + " " + capitalize(user.lastName)}`;
        
          return (
            <UsersListItem
              key={index}
              user={user}
              fullName={fullName}
            />
          )
        })}
    </ul>
  )
}

export default UsersList