import { useState, useEffect } from "react"
import UsersListItem from './UsersListItem'
export default function UsersList() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StevenTPh/contact`)
          .then((response) => response.json())
          .then((item) => setPeople(item))
      }, [])

    return (
        <ul className="users-list">
            {people.map((person, index) =>
            <UsersListItem
                key={index}
                firstName={person.firstName}
                lastName={person.lastName}
                email={person.email}
                favouriteColour={person.favouriteColour}
                profileImage={person.profileImage}
            />
            )}
        </ul>
    )
}