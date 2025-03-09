import { useState } from "react";
import css from "./style.module.css";
export default function RegistrationForm() {
  const [firstName, setfirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      FirstName: firstName,
      SecondName: secondName,
      Email: email,
      Password: password,
      Phone: phone,
    });
  };
  return (
    <>
      <center className={`${css.cen}`}>
        <form onSubmit={handleSubmit}>
          <h3 className="text-start ps-2 pt-2">Sign Up</h3>
          <p className="text-start ps-2">
            Please fill the form to create account.
          </p>
          <h6 className="text-start ps-2">First Name</h6>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            className={`${css.inputs} py-1`}
          />
          <h6 className="text-start ps-2 mt-3">Last Name</h6>
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            className={`${css.inputs} py-1`}
          />
          <h6 className="text-start ps-2 mt-3">Email</h6>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${css.inputs} py-1`}
          />
          <h6 className="text-start ps-2 mt-3">Password</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${css.inputs} py-1`}
          />
          <h6 className="text-start ps-2 mt-3">Phone Number</h6>
          <input
            type="number"
            value={phone}
            className={` py-1`}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: "94%",
              boxShadow: "7px 14px 42px 3px rgba(139, 150, 160, 0.4)",
              border: "none",
              marginLeft: "9px",
            }}
          />
          <p className="ps-2 pt-2" style={{ fontSize: "13px" }}>
            To creating an account you agree to our{" "}
            <span className="text-info" style={{ fontSize: "14px" }}>
              Terms and Privacy
            </span>
          </p>
          <button
            type="submit"
            className="btn btn-info ms-2 text-white"
            style={{ width: "350px" }}
          >
            Sign Up
          </button>
        </form>
      </center>
    </>
  );
}
