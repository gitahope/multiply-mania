import React from 'react'
import WIN from "../../images/winner-bg.svg";

const QuFinish = ({score, questions, action }) => {
  return (
    <div className="sha-page-body vh-100 d-flex align-items-center my-auto overflow-auto p-3">
        <div className="p-3 bg-light score">
          <div className="px-4 text-center">
            <img className="img-fluid w-50 rounded-circle bg-shadow" src={WIN} alt="" />
          </div>
          <div className="content pb-4 pt-5 z-3">
            <div className="col p-0 text-center">
              <small className="text-white fw-normal fs-5">
                Your final score
              </small>
              <h1 className="fw-bold text-dark mt-2 mb-0 pb-3">{score} / {questions}</h1>
            </div>
          </div>
          <button
            onClick={action}
            className="btn btn-dark btn-lg w-100 py-3 rounded-pill mb-3"
          >
            Restart Quiz
          </button>
        </div>
      </div>
  )
}

export default QuFinish
