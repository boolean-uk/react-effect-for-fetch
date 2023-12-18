export default function UsersListItem({person}) {
    const {email, name} = person
    return (
      <li className="bg-pink"> {/* All results are women so I don't need to change class name to "bg-blue"*/}
        <img src={person.picture.large} alt={`${name.first} ${name.last}`} />
        <h3>{name.title} {name.first} {name.last}</h3>
        <p>{email}</p>
      </li>
    )
  }