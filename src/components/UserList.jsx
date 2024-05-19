import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    UserService.getUsers().then((response) => {
      setUsers(response.data);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleCreateUser = () => {
    UserService.createUser(newUser).then(fetchUsers);
    setNewUser({ firstName: "", lastName: "", email: "" });
  };

  const handleUpdateUser = () => {
    UserService.updateUser(editUser.id, editUser).then(fetchUsers);
    setEditUser(null);
  };

  const handleDeleteUser = (id) => {
    UserService.deleteUser(id).then(fetchUsers);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => setEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Create User</h3>
      <input
        name="firstName"
        value={newUser.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={newUser.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button onClick={handleCreateUser}>Create</button>
      {editUser && (
        <>
          <h3>Edit User</h3>
          <input
            name="firstName"
            value={editUser.firstName}
            onChange={handleEditInputChange}
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={editUser.lastName}
            onChange={handleEditInputChange}
            placeholder="Last Name"
          />
          <input
            name="email"
            value={editUser.email}
            onChange={handleEditInputChange}
            placeholder="Email"
          />
          <button onClick={handleUpdateUser}>Update</button>
        </>
      )}
    </div>
  );
};

export default UserList;
