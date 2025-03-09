import css from "./style.module.css";
import { useState } from "react";
export default function IncreDecrement() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(0);
  const handleIncre = () => {
    setCount(count + step);
  };
  const handleDece = () => {
    setCount(count - step);
  };
  const handleRes = () => {
    setCount(0);
    setStep(0);
  };

  return (
    <>
      <center className={`${css.center}`}>
        <h1>{count}</h1>
        <input
          type="text"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-info text-white px-4 m-2"
            onClick={handleIncre}
            disabled={count >= 100}
          >
            Increament
          </button>
          <button
            className="btn btn-info text-white px-4 m-2"
            onClick={handleDece}
            disabled={count <= 0}
          >
            Decreament
          </button>
          <button
            className="btn btn-info text-white px-5 m-2"
            onClick={handleRes}
          >
            Reset
          </button>
        </div>
      </center>
    </>
  );
}
