import UsersListItem from "./UsersListItem";

export default function UsersList({userData}) {
    return (
        <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
            <ul className="users-list">

                {userData.map((usersListItem, index) => (
                    <UsersListItem
                    usersListItem={usersListItem}
                    key={index}
                />
                ))}
            
            </ul>
        </div>
        </section>
    );
  }