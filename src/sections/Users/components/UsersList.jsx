import UsersListItem from './UsersListItem'

function UsersList(props) {
  
  const listContent = props.userData.map((user) => 
    <UsersListItem user={user} key={user.id}/>
  )
  
  return (
    <ul className='users-list'>
      {listContent}
    </ul>
  )
}

export default UsersList