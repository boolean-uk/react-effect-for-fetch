import React from "react"
import { useState, useEffect } from "react"
import UsersList from "./components/UsersList"


function UsersSection() {
  const [data, setData] = useState([])

  const userURL = "https://boolean-api-server.fly.dev/OnealLane/contact"

  useEffect(() => {
    fetch(userURL)
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData);
        console.log(responseData); // Log the updated state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  


  return (
    <section>
      <h2>Users Section</h2>
     <UsersList data={data}/>
    </section>
  )
}

export default UsersSection
