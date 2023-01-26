

function UserListItem(props) {

    function userToClass(user){
        var userClass = ""
        if(user.gender === 'male'){
          userClass = "bg-blue"
        }
        else{
          userClass = "bg-pink"
        }
        return userClass
      }


    return (
        <li key={props.index} className={userToClass(props.user)}>
            <img src={props.user.picture.medium} alt={props.user.gender} />
            <h3>{props.user.name.title} {props.user.name.first} {props.user.name.last}</h3>
            <p>Email: {props.user.email}</p>
        </li>
    )
}

export default UserListItem;