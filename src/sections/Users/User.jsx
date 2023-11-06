import { useState, useEffect } from 'react';

useEffect(() => {
  fetch('https://api.artic.edu/api/v1/artworks?limit=100') 
     .then((response)=> response.json())
     .then((data) => {
      setArtSection(data.data)
      console.log(data.data)
    })
  }, []) , /*this is the useEffect for the fetch request*/

function UsersSection(props) {

useEffect(() => {
      fetch('https://randomuser.me/api/?results=10') 
        .then((response)=> response.json())
        .then((data) =>  {setUsersSection(data.results)
          console.log(data)
        
        })
  }, []) , /*this for the user section , but this in the app.jsx*/

  const { usersSection } = props

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul>
          {usersSection.map((user) => {
            const className = user.gender === 'male'? 'bg-blue' : 'bg-pink'
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`
            const email = user.email ? `Email: ${user.email}` : '';

            return (
              <li key={user.id.value} className={className}> 
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <h3>{fullName}</h3>
                {/* <p>{email}</p> */}
                {email && <p>{email}</p>}
  
              </li>
            )
          })}
        </ul>
      </div>
      

    </section>
  )
}

export default UsersSection