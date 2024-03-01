



export default function UsersListFunction(props) {
    const {item} = props

    return (
        <>
          <li style={{background: item.favouriteColour}}>
        <img
          src={item.profileImage}
          alt={item.firstName}
        />
        <h3>{item.firstName} {item.lastName}</h3>
        <p>{item.email}</p>
      </li>
        </>
    )
}