import UsersListItem from "./UsersListItem";


export default function UsersList( props) {
    const{data} = props;

  return (
    <div className="scroll-container">
        <ul className="users-list">
            {data && data.length > 0 && data.map((user) => (
                <UsersListItem key={user.id} data={user}/>
            ))}

        </ul>

    </div>
  )
}

