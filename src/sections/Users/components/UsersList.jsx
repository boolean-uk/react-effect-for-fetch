import UsersListItem from "./UsersListItem";
import { useState, useEffect } from "react";

function UsersList() {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setUserData(data.results);
            console.log(data);
        });
    }, []);
    
    return (
        <ul className="users-list">
        {userData.map((userItem) => {
            return (
            <UsersListItem
                key={userItem.login.uuid}
                gender={userItem.gender}
                thumbnail={userItem.picture.large}
                name={userItem.name.title + " " + userItem.name.first + " " + userItem.name.last}
                email={userItem.email}
            />
            );
        })}
        </ul>
    );
}

export default UsersList;