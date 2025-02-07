import "../../../App.css";
import UserListItem from "./UsersListItem";
import { useEffect, useState } from "react";

const baseURL = "https://boolean-uk-api-server.fly.dev/Hafaykon/contact"


const UserList = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(baseURL);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, [])
    
    return(
        <>
             <ul className="user-list"> 
                { data.map((user) => ( <li style={{background: user.favouriteColour}} key={user.id}>
                     <UserListItem userData={user} />
                    </li>)) }
            </ul>
        </>
    )
}

export default UserList