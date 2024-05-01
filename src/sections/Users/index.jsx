import { useEffect, useState } from "react";

function UsersSection() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/samisalehsaeed/contact`)
      .then((response) => response.json())
      .then(setUser);
  }, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {user.map((item, index) => (
            <li key={index} style={{ background: item.favouriteColour }}>
              <img src={item.profileImage} alt={item.firstName} />
              <h3>
                {item.firstName} {item.lastName}
              </h3>
              <p>
                <strong>Email: </strong>
                {item.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
// https://boolean-uk-api-server.fly.dev/samisalehsaeed/contact

{
  /* <section>
  <h2>Users Section</h2>
  <div class="scroll-container">
    <ul class="users-list">
      <li style="background: #0d7f26;">
        <img
          src="https://www.gravatar.com/avatar/ritthy.ryan@example.com?s=120&d=identicon"
          alt="Ritthy Ryan"
        />
        <h3>Mr Ritthy Ryan</h3>
        <p>Email: ritthy.ryan@example.com</p>
      </li>
      <li style="background: #0d7f26;">
        <img
          src="https://www.gravatar.com/avatar/chloe.lopez@example.com?s=120&d=identicon"
          alt="Chloe Lopez"
        />
        <h3>Ms Chloe Lopez</h3>
        <p>Email: chloe.lopez@example.com</p>
      </li>
    </ul>
  </div>
</section> */
}
