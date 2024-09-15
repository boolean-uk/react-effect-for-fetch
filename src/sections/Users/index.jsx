import PropTypes from "prop-types";
import UserList from "./components/UsersList";

function UsersSection(props) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList users={props.users}/>
      </div>
    </section>
  )
}
UsersSection.propTypes={
  users: PropTypes.array
}
export default UsersSection
