import UsersList from "./components/UsersList";

function UsersSection({ userData }) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userData={userData} />
      </div>
    </section>
  );
}

export default UsersSection;
