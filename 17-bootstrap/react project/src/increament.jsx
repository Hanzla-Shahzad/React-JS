import { useState } from "react";

export default function Increatment() {
  const [count, setCount] = useState(0);
  const handleBtn = () => setCount(() => count + 1);
  console.log(handleBtn);
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={handleBtn}>Increament</button>
      </center>
    </>
  );
}
