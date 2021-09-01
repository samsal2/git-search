import React from "react"
import PropTypes from "prop-types"

const UserTile = ({ user }) => {
  return (
    <div className="card text-center">
      <img src={user.avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
      <h3>
        {user.login}
      </h3>
      <div>
        <a href={user.html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>);
};

UserTile.propTypes = {
  user: PropTypes.any.isRequired
};


export default UserTile;
