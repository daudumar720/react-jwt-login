import React from "react";
import { useState } from "react";
import { login } from "../services/users.service";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "dawood@gmail.com",
    password: "12345",
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const submitFormHandle = (event) => {
    event.preventDefault();
    login(formData)
      .then((response) => {
        const {
          data: { Message, Type, token },
        } = response;

        localStorage.setItem("token", JSON.stringify({ token, Type }));

        setErrorMsg(null);
        setSuccessMsg(Message);
      })
      .catch((error) => {
        const {
          response: {
            data: { Message },
          },
        } = error;
        setSuccessMsg(null);
        setErrorMsg(Message);
      });
  };

  const handleOnChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-2">
      <h1 className="mt-2 text-center">Login Page</h1>
      <hr />
      <div
        className="container mt-5"
        style={{ paddingRight: 300, paddingLeft: 300 }}
      >
        {errorMsg && <p className="alert alert-danger">{errorMsg}</p>}
        {successMsg && <p className="alert alert-success">{successMsg}</p>}

        <form onSubmit={submitFormHandle}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              value={formData.email}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
              value={formData.password}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { LoginForm };
