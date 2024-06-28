import UsersListItem from './UsersListItem'
export default function UsersList({userData}) {
    return (
      <ul className="users-list">
        {userData.map((userItem, index) => (
          <UsersListItem key={index} userItem={userItem} index={index} />
        ))}
      </ul>
    );
}