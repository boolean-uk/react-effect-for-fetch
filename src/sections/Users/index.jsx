import { useState, props, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [data, setData] = useState([]);

  // useEffect(()=> {
  //   console.log('USEEFFECT', data)
  // }, [data])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/Slingreen/contact')
    .then(res => res.json())
    .then(setData)
    }, [])
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList data ={data}/>
      </div>
    </section>
  )
}

export default UsersSection
