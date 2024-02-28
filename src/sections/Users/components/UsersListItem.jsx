function UsersListItem({user, index}){

    const calculateLuminance = (hex) => {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0,2), 16);
        const g = parseInt(hex.substring(2,4), 16);
        const b = parseInt(hex.substring(4,6), 16);
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      };

    return (
        <li key={index} style={{backgroundColor: user.favouriteColour}}>
            <img src={user.profileImage} />
            <p style={{color: calculateLuminance(user.favouriteColour) < 0.5 ? '#ffffff' : '#000000'}}><strong>Name </strong>{`${user.firstName} ${user.lastName}`}</p>
            <p style={{color: calculateLuminance(user.favouriteColour) < 0.5 ? '#ffffff' : '#000000'}}><strong>Email </strong>{user.email}</p>
        </li>
    )
}

export default UsersListItem