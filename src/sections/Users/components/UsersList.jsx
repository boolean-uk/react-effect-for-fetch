import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
    return (
        <>
        <section>
            <div className="scroll-container">
                <ul className="users-list">
                    {users.map((user, index) => {
                        return <UsersListItem user={user} key={index}/>
                    })}
                </ul>
            </div>
        </section>
        <ul>
            
        </ul>
        </>
    );
}
  
export default UsersList;
  