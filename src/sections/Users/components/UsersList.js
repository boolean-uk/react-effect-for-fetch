import UsersListItem from "./UsersListItem";

function UsersList(props) {
    return (
        <div class="scroll-container">
            <ul class="users-list">
                {props.data.map((user, index) => {
                    return <UsersListItem user={user} index={index} />;
                })}
            </ul>
        </div>
    );
}

export default UsersList;
