// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
  
  // This is the main component being exported from this file
  export default function UsersListItem({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    usersListItem: { firstName, lastName, email, favouriteColour, profileImage}
  }) {
    console.log(profileImage)
    return (
      <li style={{ background: favouriteColour }}>
          <img
              src={profileImage}
              
              alt={firstName+' '+lastName}
          />
          <h3>{firstName+' '+lastName}</h3>
          <p>{email}</p>
      </li>
    );
}