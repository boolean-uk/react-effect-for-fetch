import {useEffect, useState} from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [userDatas, setUserDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://boolean-uk-api-server.fly.dev/lr222gw/contact")
        .then(res => res.json())
        .then(dat => {
          setUserDatas(dat);
        })
    }
    fetchData();
    
  },
  []
  );
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userListItems={userDatas} />
      </div>
    </section>
  )
}

export default UsersSection
