import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8088/update/" + id, {
        firstname,
        lastname,
        birthday,
        position,
        email,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex bg-success vh-100 justify-content-center alingn-itmems-center">
      <div className="w-50 bg-white vh-50 p-3 my-3">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Edit Employee</h2>
          <div className="mb-2">
            <label htmlFor="">Firstname</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lastname</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Birthday</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Position</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
