import React from "react";
import { connect } from "react-redux";

import User from "./User";
const Profiles = (props) => {
  const gitHubProfiles = props.profiles;
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          {gitHubProfiles.map((user) => (
            <div className="col-md-4 col-sm-6 col-lg-3" key={user.id}>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { profiles: state.profiles };
};
export default connect(mapStateToProps)(Profiles);
