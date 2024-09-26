import UserListItem from "./UsersListItem"



function UsersList ({ userList }) {
    return (
        <ul class="users-list">
            {
                userList.map((user, index) => (
                    <UserListItem key={index} user={user} index={index} />
                ))
            }
      </ul>
    )
}

export default UsersList