import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/users.service";
const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (!tokenString) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center">User List</h1>
      <hr />
      <div className="container">
        <ul
          className="list-group "
          style={{ paddingRight: 300, paddingLeft: 300 }}
        >
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <h5>{user.username}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
