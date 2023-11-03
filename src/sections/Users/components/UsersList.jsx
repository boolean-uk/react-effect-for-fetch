import UserListItem from "./UsersListItem"

export default function UserList ({userArr}) {
  return (
    <ul className="users-list">
      {userArr.map((user, index) => <UserListItem key={index} user={user}/>)}
    </ul>
  )
}