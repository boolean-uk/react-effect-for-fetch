import { useState } from 'react'
import { useEffect } from 'react'
import UsersList from './components/UsersList'

const API_URL = 'https://boolean-uk-api-server.fly.dev/th0jensen/contact'

function UsersSection() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setUsers(data)
            })
    }, [])

    return (
        <section>
            <h2>Users Section</h2>
            <div className='scroll-container'>
                <UsersList users={users} />
            </div>
        </section>
    )
}

export default UsersSection
