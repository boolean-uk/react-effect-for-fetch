import UsersListItem from "./UsersListItem"
export default function UsersList(props){

    const usersData = props.usersData
    
    return(

        <ul className="users-list">
            {usersData.map((usersListItem, index) => (
        <UsersListItem usersListItem = {usersListItem} key={index} />
      ))}
    </ul>

    );
}