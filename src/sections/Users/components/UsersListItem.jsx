export default function UsersListItem(props) {
  const { item } = props;
  return (
    <li style={{ background: `${item.favouriteColour}` }}>
      <img
        src={item.profileImage}
        alt={`photo of ${item.firstName + " " + item.lastName}`}
      />
      <h3>Mr {item.firstName + " " + item.lastName}</h3>
      <p>Email: {item.email}</p>
    </li>
  );
}
