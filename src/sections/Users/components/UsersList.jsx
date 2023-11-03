import UserListItem from "./UsersListItem";

function UserList({ useEffect, useState }) {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUser(data.results));
  };
  useEffect(fetchUser, []);
  return <UserListItem user={user} />;
}
export default UserList;
