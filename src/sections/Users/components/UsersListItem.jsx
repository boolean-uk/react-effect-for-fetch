function UserListItem({ user }) {
  return user.map((person, index) => {
    return (
      <li key={index} className={person.gender}>
        <img src={person.picture.medium} alt={person.name} />
        <h3>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h3>
        <p>{person.email}</p>
      </li>
    );
  });
}
export default UserListItem;
