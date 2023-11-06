function UserListItem({ user }) {
    return (
      <li className="bg-blue">
        <img src={user.picture.thumbnail} alt={user.name.first} />
        <h3>
          {user.name.title} {user.name.first}
          {user.name.last}
        </h3>
        <p>Email: {user.email}</p>
      </li>
    );
  }
  
  export default UserListItem;