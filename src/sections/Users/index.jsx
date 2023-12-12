function UsersSection({userSection}) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"></div>
      <ul>
        {userSection.map((user) => {
          const className = user.gender === 'male'? 'bg-blue' : 'bg-pink'
          const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`
          const email = user.email ? `Email: ${user.email}` : '';
          const phonNumber = user.phone ? `Number: ${user.phone}` : '';

          return(
            <li key={user.id.value} className={className}> 
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <h3>{fullName}</h3>
                {email && <p>{email}</p>}
                {phonNumber && <p>{phonNumber}</p>}

              </li>

          )
        })}
      </ul>
    </section>
  )
}

export default UsersSection