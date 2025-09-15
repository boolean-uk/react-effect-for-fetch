import UsersListItem from "./UsersListItem.jsx";
import {useEffect, useState} from "react";

function UsersList(props) {
    const url = "https://boolean-uk-api-server.fly.dev/Patrycioss/contact";
    const [data, setData] = useState([]);

    const getFullImageUrl = (imageUrl) => {
        return url.replace("Patrycioss/contact", imageUrl);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <ul className="users-list">
            {
                data.map((item, index) => (
                    <UsersListItem item={item} index={index} key={index}/>
                ))
            }
        </ul>
    );
}

export default UsersList;