import React from "react";

const QuGenerate = ({
  numQuestions,
  setNumQuestions,
  startTable,
  setStartTable,
  endTable,
  setEndTable,
  onGenerate,
}) => {
  return (
    <div className="sha-page-body vh-100 my-auto overflow-auto p-3">
      <h1 className="text-center">Question Generator</h1>
      <div className="p-3">
        <div className="d-flex flex-column align-items-start pt-4">
          <label className="ps-3 py-1" htmlFor="numQuestions">
            Number of Questions:
          </label>
          <select
            className="form-control border-0 py-3 ps-3 rounded-4 text-secondary"
            id="numQuestions"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
          >
            {[5, 10, 15, 20, 25, 50, 75, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex flex-column align-items-start pt-4">
          <label className="ps-3 py-1" htmlFor="startTable">
            Start Table:
          </label>
          <input
            type="number"
            id="startTable"
            value={startTable}
            onChange={(e) => setStartTable(Number(e.target.value))}
            className="form-control border-0 py-3 ps-3 rounded-4 text-secondary"
            placeholder="Enter From"
            aria-label="Enter From"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="d-flex flex-column align-items-start pt-4">
          <label className="ps-3 py-1" htmlFor="endTable">
            End Table:
          </label>
          <input
            type="number"
            id="endTable"
            value={endTable}
            onChange={(e) => setEndTable(Number(e.target.value))}
            className="form-control border-0 py-3 ps-3 rounded-4 text-secondary"
            placeholder="Enter To"
            aria-label="Enter To"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button
          className="btn bg-dark text-white w-100 btn-lg py-3 my-4 rounded-pill"
          onClick={onGenerate}
        >
          Generate Questions
        </button>
      </div>
    </div>
  );
};

export default QuGenerate;
