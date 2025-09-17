
export default function UsersListItem({ contactInfo }) {

  return (
    <>
    <li style={{ background: `${contactInfo.favouriteColour}` }}>
      <img
        src={contactInfo.profileImage}
        alt={`${contactInfo.firstName} ${contactInfo.lastName}`} />
      <h3>{`${contactInfo.firstName} ${contactInfo.lastName}`}</h3>
      <p>Email: {`${contactInfo.email}`}</p>
    </li>
    </>
  )
}