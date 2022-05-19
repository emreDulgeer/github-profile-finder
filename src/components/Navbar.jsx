import React, { useState, useEffect } from "react";
import { getProfiles } from "../redux/actions";
import { connect } from "react-redux";
const Navbar = (props) => {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {}, []);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const buttonSubmit = (e) => {
    e.preventDefault();
    props.getProfiles(keyword);

    setKeyword("");
  };

  return (
    <div>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Github Profile Finder</span>
          </a>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0"
            role="search"
            onSubmit={buttonSubmit}
          >
            <div className="row">
              <div className="col-md-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  value={keyword}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary btn-sm" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { profiles: state.profiles };
};

export default connect(mapStateToProps, { getProfiles })(Navbar);
