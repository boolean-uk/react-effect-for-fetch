import UsersListItem from "./UsersListItem"
import { useState, useEffect } from "react";

export default function UsersList()
{
    const [userList, setUserList] = useState([])
    useEffect(() =>
    {
        fetch("https://boolean-api-server.fly.dev/klaand01/contact")
        .then((response) => response.json())
        .then((data) => {setUserList(data)})},
    [])

    return (
        <>
        <ul className="users-list">
            {userList.map((user, index) => (
                <UsersListItem key={index} user={user} />
            ))}
        </ul>
        </>
    )
}