

function UserListItem({
    info:{firstName,lastName,gender,email,jobTitle,
    street,
    city,
    latitude,
    longtitude,
    favouriteColour,
    profileImage,
    id
}}){

    if(firstName !== undefined){
        let name = `${firstName} ${lastName}`;
        return(
            
              <li style={{background:favouriteColour}}>
                <img
                  src={profileImage}
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Email: {email}</p>
              </li>
              
           
            )
          }
    }
  
  
  export default UserListItem