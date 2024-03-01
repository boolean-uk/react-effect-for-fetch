import {useState, useEffect} from 'react'
import UsersListItem from './UsersListItem'

export default function UsersList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/giarreh/contact")
      .then(response => response.json())
      .then(data => { setUsers(data) })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  
  return (
      <>
      {users.length === 0 ? (
        <p>No users here...</p>
      ) : (
        <ul className="users-list">
          {users.map((user, index) => (
            <UsersListItem 
              key={index} 
              firstName={user.firstName} 
              lastName={user.lastName} 
              email={user.email} 
              profileImage={user.profileImage} 
              favouriteColour={user.favouriteColour} 
            />
          ))}
        </ul>
      )}
      </>
  )
}
