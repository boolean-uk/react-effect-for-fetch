export default function UsersListItem({ user }) {
  let pronoun = "";
  if (user.gender.includes("male") && !user.gender.includes("trans")) {
    pronoun = "Mr.";
  } else if (user.gender.includes("female") && !user.gender.includes("trans")) {
    pronoun = "Mrs.";
  } else {
    pronoun = "Mx.";
  }

  return (
    <li
      key={user.id}
      style={{ background: `${user.favouriteColour}`, minHeight: "250px" }}>
      <img
        src={`${user.profileImage}`}
        alt={`${user.firstName + " " + user.lastName}`}
        width={55}
      />
      <h3>{`${pronoun} ${user.firstName + " " + user.lastName}`}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}
