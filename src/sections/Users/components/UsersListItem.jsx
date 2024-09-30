

function UsersListItem({data}){
    return(
        <li key={data.id} style={{background: data.favouriteColour}}>
            <img
            src="https://www.gravatar.com/avatar/ritthy.ryan@example.com?s=120&d=identicon"
            alt="Ritthy Ryan"
            />
            <h3>{data.firstName +' '+ data.lastName}</h3>
            <p>Email: {data.email}</p>
        </li>
    )
}

export default UsersListItem