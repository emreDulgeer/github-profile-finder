import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div className="card mt-2">
        <img src={user.avatar_url} alt="" className="img-fluid" />
        <div className="card-body">
          <h5 className="card-title">{user.login}</h5>
          <a
            rel="noreferrer"
            target="_blank"
            href={user.html_url}
            className="btn btn-primary btn-sm"
          >
            Go Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
