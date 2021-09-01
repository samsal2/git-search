import React from "react"
import UserTile from "./UserTile"
import Loading from "./Loading"


const userListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

const UserGrid = ({ users, loading }) => {
  return (loading ? <Loading /> :
    <div style={userListStyle}>
      {users.map(user => (<UserTile key={user.id} user={user} />))}
    </div>);
};

export default UserGrid;
