import { useEffect, useState } from 'react';

import UsersList from './components/UsersList';
import { getRequest } from '../../utils/requests';

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getRequest('https://boolean-api-server.fly.dev/solido7/contact').then(data => setUsers(data));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
