import "../../../App.css";

const UserListItem = ({userData}) => {

    return(
        <>
            <img src={userData.profileImage} />
            <h3>{userData.firstName} {userData.lastName}</h3>
            <p>Email: {userData.email}</p>
        </>
    )
}

export default UserListItem