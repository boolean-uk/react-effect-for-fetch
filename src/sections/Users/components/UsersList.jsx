import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem"

function UsersList() {
    const url = "https://boolean-uk-api-server.fly.dev/heskinstad/contact";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
        }, []);

    return (
        <>
            <ul className="users-list">
                {data.map((user, index) => (
                    <UsersListItem key={index} User={user}/>
             ))};
             </ul>
        </>
    )
}

export default UsersList;