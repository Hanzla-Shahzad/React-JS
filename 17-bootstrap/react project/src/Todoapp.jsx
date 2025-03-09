import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Inputs from "./input";
export default function TodoApp() {
  const key = "keysIsImportant";
  const [curr, setCurr] = useState(() => {
    let saved = localStorage.getItem(key);
    if (!saved) return [];
    return JSON.parse(saved);
  });

  const [currDateTime, setCurrDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const dateTime = new Date();
      const date = dateTime.toLocaleDateString();
      const time = dateTime.toLocaleTimeString();
      setCurrDateTime(`${date} - ${time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(curr));
  }, [curr]);

  const handleInput = (event) => {
    if (event.key === "Enter") {
      let newItems = event.target.value;
      event.target.value = "";
      let newList = [...curr, newItems];
      setCurr(newList);
    }
  };
  const handleBtn = (index) => {
    setCurr(curr.filter((g, v) => v !== index));
  };
  return (
    <>
      <center>
        <h1 className="text-center">Todo App</h1>
        <h1>{currDateTime}</h1>
        <div className={styles.todo}>
          <ul className="list-group">
            <Inputs handleInput={handleInput}></Inputs>
            {curr.map((val, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {val}
                <button
                  type="button"
                  className="btn btn-danger float-end"
                  onClick={() => handleBtn(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <center>
          <button
            type="button"
            className="btn btn-danger mt-2 p-2"
            onClick={() => {
              setCurr(curr.slice(0, curr));
            }}
          >
            Clear All
          </button>
        </center>
      </center>
    </>
  );
}
