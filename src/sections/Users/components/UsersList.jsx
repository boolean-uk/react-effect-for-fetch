import { useEffect, useState } from "react"
import UserListItem from "./UsersListItem";

function UserList() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ThomasKvam/contact`)
        .then(response => response.json())  // Fix: Invoke the json() method
        .then(setUserData)
        .catch(error => console.error('Error fetching data:', error));
        console.log(userData)
    }, []);


    return(
        <ul className="users-list">
            {userData.length === 0 ? (
                <p>No user found...</p>
            ) : (
                <ul>
                    {userData.map((user, index) =>
                    //Passing down the user values (some are unnecessary)
                    <UserListItem key={index}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        gender={user.gender}
                        email={user.email}
                        jobTitle={user.jobTitle}
                        street={user.street}
                        city={user.city}
                        latitude={user.latitude}
                        longitude={user.longitude}
                        favouriteColour={user.favouriteColour}
                        profileImage={user.profileImage}
                        id={user.id}/>)}    
                </ul>
            )}
        </ul>
    )
}

export default UserList