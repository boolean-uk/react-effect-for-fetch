import { useEffect, useState } from "react"


function UsersSection() {

  const [usersList,setUsersList] = useState({})
  const [userInfo,setUserInfo] = useState([])

  async function getData() {
    const response = await fetch('https://randomuser.me/api/?results=5')
    const json = await response.json()
    setUsersList(json)
  }

  useEffect(() => {
    getData()
    setUserInfo(usersList.results)

  }, [userInfo])

  // console.log(userInfo)
  useState(userInfo)
  const userName = userInfo[0]
  console.log(userName)
  // const userName=userInfo[0][0].name  <===== for name of a user but it shows Cannot read properties of undefined (reading '0') although if I console.log usersList it is shown correctly.

  return (
    <section>
          <h2>Users Section</h2>
        <div class="scroll-container">
          <ul class="users-list">
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/76.jpg"
                  alt="Ritthy Ryan"
                />
                <h3>Mr Ritthy Ryan</h3>
                {/* {userName.name} */}
                <p>Email: ritthy.ryan@example.com</p>
              </li>
          </ul>
        </div>
    </section>

  )
}

export default UsersSection
