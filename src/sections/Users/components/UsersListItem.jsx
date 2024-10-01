
export function UserListItem({ userListItem }) {
    return (
        <li style={{ background: userListItem.favouriteColour }}>
            <img src={`https://www.gravatar.com/avatar/${userListItem.email}?s=120&d=identicon`}/>
            <h3>{userListItem.firstName} {userListItem.lastName}</h3>
            <p>Email: {userListItem.email}</p>
      </li>
    )
}