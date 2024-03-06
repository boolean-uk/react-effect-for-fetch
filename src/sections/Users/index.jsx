import React from 'react'
import UsersList from "./components/UsersList"
import { useState, useEffect } from "react"

function UsersSection() {

  const url = "https://boolean-api-server.fly.dev/hjaldrgud/contact"

    const [data, setData]  = useState([])

    useEffect(() => {
      fetch(`${url}`)
          .then((response) => response.json())
          .then(setData)
    }, [])
    
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">

        <UsersList data={data} />

      </div>
    </section>
  )
}

export default UsersSection
