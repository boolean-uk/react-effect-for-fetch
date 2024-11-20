import { useState, useEffect } from "react";

function UsersSection() {

  const [users, setUsers] = useState([
    {email: "email", firstName: "firstName", 
    lastName: "lastName", favouriteColour: "#5894ff",
    profileImage:	"https://www.gravatar.com/avatar/Selina_Wuckert@hotmail.com?s=120&d=identicon"}
  ]);

  const url = "https://boolean-api-server.fly.dev/Sebank/contact";

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setUsers(newData);
      console.log(newData)
    }
    fetchData()
  }, [])

  console.log("users", users)

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((elm, key) => 
            <li key={key} style={{background: elm.favouriteColour}}>
            <img
              src={elm.profileImage}
              alt="Ritthy Ryan"
            />
            <h3>{elm.gender}: {elm.firstName} {elm.lastName}</h3>
            <p>Email: {elm.email}</p>
          </li>
          )}
        </ul>

      </div>
    </section>
  )
}

export default UsersSection
