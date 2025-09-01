
function UserListItem({key, colour, imgSrc, name, email}) {

  return (
    <li 
        key={key} 
        style = {{background: colour}}>
        <img
            src = {imgSrc}
            alt = {name}
        />
        <h3>{name}</h3>
        <p>Email: {email}</p>
    </li>
  )}

export default UserListItem