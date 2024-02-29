
export default function UsersListItem(props) {
    const{data} = props;

    const listItemStyle = {background: data.favouriteColour};

  return (
    <>
        <li style={listItemStyle}>
            <img
            src={data.profileImage}
            alt={data.firstName +" " + data.lastName}
            />
            <h3>{data.firstName +" " +data.lastName}</h3>
            <p>{`Email: ${data.email}`}</p>
        </li>
     
    </>
  )
}


