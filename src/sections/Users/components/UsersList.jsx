import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";


export default function UsersList(){
    const link = 'https://boolean-uk-api-server.fly.dev/Panfi98/contact'
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(link)
            .then((res)=>res.json())
            .then(setUsers)
            .then(()=>console.log(users))
    },[])

    return(
        <ul className="scroll-container">
            {users.map((user,index) =>
                <UsersListItem props={user} key={index}/>
            )}
        </ul>
    );
}