import UsersListItem from "./components/UsersListItem";

function UsersSection() {
  return (
      <>
        <section>
          <h2>Users Section</h2>
          <div className="scroll-container">
            <ul className="users-list">
              <UsersListItem />
            </ul>
          </div>
        </section>
      </>
  );
}

export default UsersSection
