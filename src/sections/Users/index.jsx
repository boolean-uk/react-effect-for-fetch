//import UseEffect and State for performance and add state to comps 
import { useEffect, useState } from "react";
//import PropTypes for prop checking 
import PropTypes from 'prop-types'
//import UsersList comp ...
import UsersList from "./components/UsersList"

//name functions and pass baseUrl prop
function UsersSection ({baseUrl}) {
//create variables, two, one for users [] and one for the users info within state from api[]
const [users, SetUsers] = useState([])
const [userUrl, SetUseUrl] = useState(`${baseUrl}Shaun-Harris/contact`) 
//effect to fetch data 
useEffect (() => {
    fetch(userUrl)
    .then((res) => res.json())
    .then((data) => {SetUsers(data)})
}, [userUrl])

//return <section> and class scroll container and pass through the usersLists comp 
return (
    <section>
  <h2>Users Section</h2>
  <div className="scroll-container">
    <UsersList users={users}></UsersList>
  </div>
</section>
 )
}

//props..
UsersSection.propTypes = {
    baseUrl: PropTypes.string
}
//export
export default UsersSection






