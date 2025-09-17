import UsersListItem from "./UsersListItem"

export default function UsersList({ contacts }) {
  console.log(contacts)

  return (
    <ul className="users-list">
      
      {contacts && contacts.map((c, i) => (
        <UsersListItem key={i} contactInfo={c}/>
      ))}

    </ul>
  )
}