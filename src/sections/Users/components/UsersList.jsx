import React from "react";
import PropTypes from 'prop-types'
import UsersListItem from "./UsersListItem";

function UsersList({data}) {
  return (
    <div>
      <ul className="users-list">
            {data.map((p, i) =>( 
                <UsersListItem key ={i} data={p}/>
            ))}
      </ul>
    </div>
  );
}

export default UsersList;

UsersList.propTypes = {
    data: PropTypes.array,
  }