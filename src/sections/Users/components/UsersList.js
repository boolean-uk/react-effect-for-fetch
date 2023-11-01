import UsersListItem from "./UsersListItem"

function UsersList(props) {
    //console.log("Props in UsersList:", props)
    return <ul class="users-list">

    { //Each User: 
      props.Users.map((user) => {
        const user_gender = user.gender
        return (
            <UsersListItem user={user} user_gender={user_gender} />
        )
      })
    } </ul>
}

export default UsersList