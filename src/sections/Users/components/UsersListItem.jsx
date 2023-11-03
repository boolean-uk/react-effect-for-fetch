export default function UserListItem ({user}) {
  // console.log(user)
  return (
    <li className={user.gender === "male" ? "bg-blue" : "bg-pink"}>
      <img 
        src={user.picture.thumbnail}
        alt={"profile picture of " + [user.name.title, user.name.first, user.name.last].join(" ")}
      />
      <h3>{[user.name.title, user.name.first, user.name.last].join(" ")}</h3>
      <p>{user.email}</p>
    </li>
  )
}