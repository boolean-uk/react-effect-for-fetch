const genderToAddressable = {
    "Male": "Mr",
    "Female": "Mrs",
    "F2M": "Mr",
    "T* man": "Mr",
    "FTM": "Mr",
    "Cisgender male": "Mr",
    "Cis man": "Mr",
    "Trans man": "Mr",
};

function UsersListItem(props) {
    const {item} = props;

    let addressable = "Mr/Mrs";
    const foundAddressable = genderToAddressable[item.gender];
    if (foundAddressable != null) {
        addressable = foundAddressable;
    }

    return (
        <li style={{backgroundColor: `${item.favouriteColour}`}}>
            <img
                src={item.profileImage}
                alt={item.firstName + " " + item.lastName}
            />
            <h3>{addressable} {item.firstName} {item.lastName}</h3>
            <p>Email: {item.email}</p>
        </li>
    );
}

export default UsersListItem;