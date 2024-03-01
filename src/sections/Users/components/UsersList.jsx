import UsersListItem from './UsersListItem.jsx'



export default function UsersList(props) {
    const {data} = props

    return (<>
  <div className="scroll-container">
    <ul className="users-list">
     {data.map((item, index) => (
        <UsersListItem key={index} item={item}/>
     ))}
    </ul>
  </div>
</>
    )
}