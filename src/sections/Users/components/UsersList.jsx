import UsersListItemComponent from './UsersListItem'

function UsersListComponent({userData}) {
  return (
    <ul className="users-list">
      { userData.map((data, index) => (
          <UsersListItemComponent key={index} info={data} />
        ))
      }
    </ul>
  )
}

export default UsersListComponent