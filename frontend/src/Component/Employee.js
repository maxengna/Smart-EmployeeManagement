import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Employee() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8088/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8088/delete/" + id)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center aligs-items-center bg-primary vh-100">
      <div className="bg-white rounded w-60 p-5 my-4">
        <h2>Employee Management</h2>
        <Link to="/create" className="btn btn-success">
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Birthday</th>
              <th>Position</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.id}>
                <td>{d.firstname}</td>
                <td>{d.lastname}</td>
                <td>{d.birthday}</td>
                <td>{d.position}</td>
                <td>{d.email}</td>
                <td>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
