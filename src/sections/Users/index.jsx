
import UserList from "./components/UsersList.jsx";

const UsersSection = () => {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <UserList />
        </ul>
      </div>
    </section>
  );
};

export default UsersSection;