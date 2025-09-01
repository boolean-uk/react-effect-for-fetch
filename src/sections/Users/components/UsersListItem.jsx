
export default function UsersListItem({ user, index }){

  return (
    < >
      <li style={{background: user.favouriteColour}} key={ index }> 
        <img
          src={ user.profileImage }
          alt={ user.name }
        />
        <h3>{ user.firstName } { user.lastName }</h3>
        <p>{ user.email }</p>
      </li>
    </>
  )
}
