//import PropTypes for prop checking 
import PropTypes from 'prop-types'
//import UsersListItem comp ...
import UsersListItem from "./UsersListItem.jsx"

//name functions and pass users
function UsersList ({users}) {
//return <ul> and class "users-list", 
//bring in users array with map to iterate to provide function to each elemtn 
//and U.L.I comp 
return (
    <ul className="users-list">
        {users.map((user, index) =>
        <UsersListItem key={index} user={user}></UsersListItem>
        )}
  </ul>
 )
}

//props declare and specify array
UsersList.propTypes = {
    users: PropTypes.array
}
//export
export default UsersList






