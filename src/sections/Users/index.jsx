function UsersSection() {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <li className="bg-blue">
            <img
              src="https://randomuser.me/api/portraits/med/men/76.jpg"
              alt="Ritthy Ryan"
            />
            <h3>Mr Ritthy Ryan</h3>
            <p>Email: ritthy.ryan@example.com</p>
          </li>
          <li className="bg-pink">
            <img
              src="https://randomuser.me/api/portraits/med/women/53.jpg"
              alt="Chloe Lopez"
            />
            <h3>Ms Chloe Lopez</h3>
            <p>Email: chloe.lopez@example.com</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
