function UserListItem({ userData }) {
  const user = userData;
  //   console.log(userData);
  return (
    <li style={{ background: user.favouriteColour }}>
      <img src={user.profileImage} alt={user.firstName + " " + user.lastName} />
      <h3>{user.gender + " " + user.firstName + " " + user.lastName}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}
export default UserListItem;

// {
//     "firstName": "Darien",
//     "lastName": "Herman",
//     "gender": "Cisgender man",
//     "email": "Leonard_Oberbrunner5@hotmail.com",
//     "jobTitle": "Internal Metrics Officer",
//     "street": "Mraz Curve",
//     "city": "Steuberport",
//     "latitude": 12.4188,
//     "longitude": 157.5148,
//     "favouriteColour": "#bbaf86",
//     "profileImage": "https://www.gravatar.com/avatar/Leonard_Oberbrunner5@hotmail.com?s=120&d=identicon",
//     "id": 14
//   }
