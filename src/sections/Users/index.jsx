function UsersSection({ userData }) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData && userData.length > 0 ? (
            userData.map((user) => (
              <li key={user.id} style={{ background: user.favouriteColour }}>
                <img
                  src={`${user.profileImage}`}
                  alt={`${user.firstName} ${user.lastName}`}
                />
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                <p>{`Email: ${user.email}`}</p>
              </li>
            ))
          ) : (
            <li>No art data available</li>
          )}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
