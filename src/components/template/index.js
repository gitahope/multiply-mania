import React from "react";
import ART from "../../images/anim-bg-1.svg";
import { useDispatch } from "react-redux";
import { startQuiz } from "../../library/quizSlice";
import Wrapper from "../layouts";

const Template = () => {
  const dispatch = useDispatch();
  const quizHandle = () => {
    dispatch(startQuiz(true));
  };
  return (
    <Wrapper>
      <div className="sha-page-body vh-100 d-flex align-items-center my-auto overflow-auto p-3">
        <div className="p-3 bg-light">
          <div className="px-4">
            <img className="img-fluid w-100 rounded-4 bg-shadow" src={ART} alt="" />
          </div>
          <div className="content pb-4 pt-5 z-3">
            <div className="col p-0 text-center">
              <h1 className="fw-bold text-dark mb-0 pb-3">Multiply Mania</h1>
              <small className="text-secondary fw-normal fs-6">
                Master your times tables, race against the clock, and become a
                math champion in this fast-paced learning adventure!
              </small>
            </div>
          </div>
          <button
            onClick={quizHandle}
            className="btn btn-dark btn-lg w-100 py-3 rounded-pill mb-3"
          >
            Get started
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Template;
