import React from "react";
import APPICON from "../../../images/icon.png";

const Header = () => {
  return (
    <div className="sha-page-header d-flex align-items-center justify-content-between mb-auto p-3 bg-light">
      <h5 className="mb-0 ms-3 me-auto text-black">
        <img src={APPICON} style={{width:35}} className="img-fluid rounded-2 bg-shadow me-2" alt="" />
        Math Quiz
      </h5>
      <div className="d-flex align-items-center gap-3">
        <button
          className="toggle d-flex align-items-center justify-content-center icon fs-5 hc-nav-trigger hc-nav-1"
          aria-controls="hc-nav-1"
        >
          <i className="bi bi-list mdi-18px"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
