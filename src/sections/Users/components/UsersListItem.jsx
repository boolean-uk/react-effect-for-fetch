const UsersListItem = ({ user }) => {
  //   console.log(user.name.title, user.name.first, user.name.last);
  return (
    <li className='bg-blue'>
      <img src={`${user.picture.medium}`} alt='Ritthy Ryan' />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>Email: {user.email}</p>
    </li>
  );
};

export default UsersListItem;
