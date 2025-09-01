import {useState, useEffect} from 'react'

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/monaeikli/contact"
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }
  , [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users ? (
          users.map((user) => (
            <div key={user.id} className="card" style={{backgroundColor:user.favoriteColour||user.favouriteColour||'#eee'}}>
              <img
                src={`${user.profileImage}`}
                alt={user.name}
                className="user-avatar"
              />
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </section>
  )
}

export default UsersSection