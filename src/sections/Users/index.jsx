import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import UsersList from "./components/UsersList"

function UsersSection({baseUrl}) {
  const [users, SetUsers] = useState([]) 
  const [userUrl, SetUserUrl] = useState(`${baseUrl}AxelHan/contact`) 

  useEffect(() => {
    fetch(userUrl)
      .then((res) => res.json())
      .then((data) =>{SetUsers(data)})
  }, [userUrl])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users}></UsersList>
      </div>
    </section>
  )
}

UsersSection.propTypes = {
  baseUrl: PropTypes.string
}

export default UsersSection
