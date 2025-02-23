import React from "react";

function AdminView({ users = [] }) {
  return (
    <div className="text-center">
      {users.map((user) => (
        <div key={user.id}>
          <div>ID : {user.id}</div>
          <div>First Name : {user.firstName}</div>
          <div>Last Name : {user.lastName}</div>
          <div>Username : @{user.userName}</div>
          <div>Email : {user.email}</div>
          <div>Password : {user.password}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminView;
