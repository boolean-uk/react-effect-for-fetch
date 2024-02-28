export default function UsersListItem({ user }) {
  const fullname = `${user.firstName} ${user.lastName}`;
  return (
    <li>
      <img src={user.profileImage} alt={fullname} />
      <h3>{fullname}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}
