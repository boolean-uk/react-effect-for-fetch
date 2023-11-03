import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=25")
            .then((res) => res.json())
            .then(({ results }) =>
                setUsers(
                    results.map((user) => {
                        return {
                            picture: user.picture.medium,
                            name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                            email: user.email,
                            gender: user.gender,
                        };
                    })
                )
            );
    }, []);

    return (
        <ul className="users-list">
            {users.map((user, index) => (
                <UsersListItem key={index} user={user} />
            ))}
        </ul>
    );
};

export default UsersList;
