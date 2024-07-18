export default function UsersListItem({ contacts }) {
  return contacts.map((index) => {
    return (
      <li key={index.id} style={{ background: `${index.favouriteColour}` }}>
        <img
          src={index.profileImage}
          alt={`${index.firstName} ${index.lastName}`}
        />
        <h3>{`${index.firstName} ${index.lastName}`}</h3>
        <p>Email: {index.email}</p>
      </li>
    );
  });
}
