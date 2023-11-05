import { useEffect } from "react"
import UserListItem from "./UsersListItem"

function UsersList(props) {
    const { usersSection } = props
    return (

        <ul>
        {usersSection.map((user, index) => {
             console.log(user, index)
             return (
                <UserListItem key={index} user={user}  />
             )
        })}
      </ul>
    )
}

export default UsersList