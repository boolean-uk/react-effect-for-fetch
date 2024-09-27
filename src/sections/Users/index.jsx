import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import UsersListItem from './components/UsersListItem';

function UsersSection() {
  const [users, setUsers] = useState([]); // State to store user data
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Function to fetch user data from API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://boolean-api-server.fly.dev/Santhia97/contact');
        const data = await response.json();
        setUsers(data); // Store fetched user data
        setIsLoading(false); // Update loading state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Call fetchUsers function on component mount
  }, []); // Empty dependency array ensures useEffect runs only once on component mount
  console.log(users)
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
       {/* Render UsersList component with UsersListItem components */}
       <UsersList>
          {isLoading ? (
            <div>Loading...</div> // Display loading message while fetching data
          ) : (
            users.map((user, index) => (
              <UsersListItem
                key={index}
                avatarUrl={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                name={user.name}
                email={user.email}
                favoriteColour={user.favouriteColour}
              />
            ))
          )}
        </UsersList>
      </div>
    </section>
  )
}

export default UsersSection
