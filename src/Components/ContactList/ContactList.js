import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactList.css";

const ContactList = () => {
  const [users, setUsers] = useState([]);
  const [showAge, setShowAge] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleShowAge = (index) => {
    setShowAge(index === showAge ? null : index);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Contact List</h1>
      <div className="row">
        {users.map((user, index) => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <p className="card-text">Website: {user.website}</p>
                {showAge === index && <p className="card-text">Age: N/A</p>}
                <button
                  onClick={() => handleShowAge(index)}
                  className="btn btn-primary"
                >
                  {showAge === index ? "Hide Age" : "Show Age"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
