import UsersList from "./components/UsersList";

function UsersSection(props) {
  const { data } = props;
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList data={data} />
      </div>
    </section>
  );
}

export default UsersSection;
