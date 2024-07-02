import UsersList from "./components/UsersList";

function UsersSection(props) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={props.users} />
      </div>
    </section>
  );
}

export default UsersSection;
