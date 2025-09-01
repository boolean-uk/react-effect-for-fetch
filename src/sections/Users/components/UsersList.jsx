import UsersListItem from "./UsersListItem"
export default function UsersList({data}){

    return <>
    <ul className="users-list">
    {data?.map((user, i) => (
        <UsersListItem user={user} key={i} />
      ))}
    </ul>
 </>   
}
    