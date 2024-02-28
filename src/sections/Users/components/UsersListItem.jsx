const gendersSet = {
    Androgynous: "!?",
    "Trans woman": "Ms",
    "T* woman": "Ms",
    "Male to female transsexual woman": "Ms",
    "Intersex man": "Mr",
    Neither: "!?",
    "Female to male trans man": "Mr",
    Man: "Mr",
    Demigender: "!?",
    "Gender fluid": "!?",
    "Transexual man": "Mr",
    "Trans person": "!?",
    "Two-spirit person": "!?",
};

const UsersListItem = ({ user }) => {
    return (
        <li style={{ background: user.favouriteColour }}>
            <img
                src={user.profileImage}
                alt={user.lastName + " " + user.firstName}
            />
            <h3>
                {gendersSet[user.gender]} {user.lastName} {user.firstName}
            </h3>
            <p>Email: {user.email}</p>
        </li>
    );
};

export default UsersListItem;
