export default function UsersListItem({ userItem, index }) {
  return (
    <li key={index} style={{ background: `${userItem.favouriteColour}` }}>
      <img
        src={userItem.profileImage}
        alt={`${userItem.firstName} ${userItem.lastName}`}
      />
      <h3>
        {userItem.firstName} {userItem.lastName}
      </h3>
      <p>Email: {userItem.email}</p>
    </li>
  );
}
