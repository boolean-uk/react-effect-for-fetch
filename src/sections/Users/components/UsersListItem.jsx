function UsersListItem({ data }) {
  const style = {
    background: `${data.favouriteColour}`,
  };
  return (
    <li style={style}>
      <img src={data.profileImage} alt={data.firstName + data.lastName} />
      <h3>{data.firstName + " " + data.lastName}</h3>
      <p>Email: {data.email}</p>
    </li>
  );
}

// <img src={data.profileImage} alt={data.lastName} />
export default UsersListItem;
