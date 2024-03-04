import "../../App.css";
import UsersList from "./components/UsersList";

function UsersSection({ usersData }) {
  const { data } = usersData;
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
