import { useEffect, useState } from "react"
import UserListItem from "./UsersListItem"

function UserList() {
  const url = "https://boolean-uk-api-server.fly.dev/SnorreAldstedt/contact"
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
        const response = await fetch (url);
        const jsonData = await response.json();
        setContacts(jsonData);
    }
    fetchContacts();
  }, [])

  return (
    <ul className="users-list">
    {contacts.map((contact, index) => (
        <UserListItem 
            key = {index} 
            colour = {contact.favouriteColour} 
            imgSrc = {contact.profileImage} 
            name = {`${contact.firstName} ${contact.lastName}`} 
            email = {contact.email}
        />
    ))
    }
    </ul>
  )
}

export default UserList